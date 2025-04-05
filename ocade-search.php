<?php

/**
 * Plugin Name: Ocade Search Ocade Fusion
 * Theme URI: https://github.com/ocade-fusion-system/ocade-search
 * Author: Ocade Fusion
 * Author Name: Valentin Charrier
 * Description: Plugins de recherche d'articles ultra rapide pour le site Ocade Fusion.
 * Text Domain: ocade-search
 * Version: 1.0.37
 */

add_action('admin_init', function () {
  if (isset($_SERVER['REQUEST_URI']) && strpos($_SERVER['REQUEST_URI'], 'update-core.php') !== false) require_once plugin_dir_path(__FILE__) . 'inc/plugin-updater.php';
});

require_once plugin_dir_path(__FILE__) . 'includes/admin-meta-box.php'; // Ajouter un champ personnalisé pour les ngrammes dans les articles
require_once plugin_dir_path(__FILE__) . 'includes/api-rest.php'; // Permettre l'accès aux ngrammes via l'API REST
require_once plugin_dir_path(__FILE__) . 'includes/ajax-indexation.php'; // Permettre de regénérer l'index de recherche
require_once plugin_dir_path(__FILE__) . 'includes/indexer.php'; // Permettre de regénérer l'index de recherche
require_once plugin_dir_path(__FILE__) . 'includes/search-form.php'; // Ajouter un formulaire de recherche personnalisé via le hook do_action('ocade_search_form');
require_once plugin_dir_path(__FILE__) . 'includes/image-search-fetured.php'; // Ajouter un champs image dans les articles pour la recherche

// Charger le fichier style.css du plugin
add_action('wp_enqueue_scripts', function () {
  wp_enqueue_style('ocade-search', plugin_dir_url(__FILE__) . 'style.css');
});


/** Créer une tâche CRON quotidienne à 4H de réindexation */
register_activation_hook(__FILE__, function () {
  if (!wp_next_scheduled('ocade_recherche_indexation')) wp_schedule_event(strtotime('04:00:00'), 'daily', 'ocade_recherche_indexation');
});

/** Supprimer la tâche CRPN quotidienne à 4H de réindexation */
register_deactivation_hook(__FILE__, function () {
  wp_clear_scheduled_hook('ocade_recherche_indexation');
});

/** Regenerer l'index du moteur de recherche si beosin via une tâche cron */
add_action('plugins_loaded', function () {
  $index_file = plugin_dir_path(__FILE__) . 'index/search-index.json';
  // Si le fichier est manquant ET la tâche n'est pas déjà programmée
  if (!file_exists($index_file) && !wp_next_scheduled('ocade_reindex_once')) wp_schedule_single_event(time() + 60, 'ocade_reindex_once');
});
/** Regenerer l'index du moteur de recherche si beosin via une tâche cron */
add_action('ocade_reindex_once', function () {
  require_once plugin_dir_path(__FILE__) . 'includes/indexer.php';
  ocade_indexer();
});
/** Regenrer l'index du moteur de recherche si besoin lors de la publication d'un article */
add_action('publish_post', function ($post_id) {
  if (!wp_next_scheduled('ocade_reindex_once')) wp_schedule_single_event(time() + 60, 'ocade_reindex_once');
});


/** Ajouter un champ personnalisé pour les ngrammes dans les articles. */
function ocade_indexer_articles() {
  require_once plugin_dir_path(__FILE__) . 'includes/indexer.php';
  ocade_indexer();
}
add_action('ocade_recherche_indexation', 'ocade_indexer_articles');

add_filter('plugin_action_links_' . plugin_basename(__FILE__), function ($links) {
  if (current_user_can('manage_options')) {
    $regen_url = admin_url('admin-ajax.php?action=ocade_regenerer_index');
    $nonce = wp_create_nonce('ocade_index');
    
    $links[] = '<a href="#" onclick="event.preventDefault(); regenOcadeIndex(this);" data-url="' . esc_url($regen_url) . '" data-nonce="' . esc_attr($nonce) . '">🔁 Régénérer l’index</a>';

    // Ajoute le script d'action JS si on est bien dans l’admin
    add_action('admin_footer', function () {
      ?>
      <script>
        function regenOcadeIndex(el) {
          const url = el.getAttribute('data-url');
          const btn = el;
          btn.textContent = "⏳ Indexation...";
          fetch(url, {
            method: "POST",
            headers: {
              'X-WP-Nonce': btn.getAttribute('data-nonce')
            }
          })
          .then(r => r.json())
          .then(data => {
            if (data.success) {
              btn.textContent = "✅ Terminé";
            } else {
              btn.textContent = "❌ Échec";
            }
            setTimeout(() => {
              btn.textContent = "🔁 Régénérer l’index";
            }, 2000);
          })
          .catch(() => {
            btn.textContent = "❌ Erreur";
          });
        }
      </script>
      <?php
    });
  }

  return $links;
});
