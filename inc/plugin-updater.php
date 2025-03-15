<?php
// Sécurité : empêcher l'accès direct
if (!defined('ABSPATH')) exit;

add_filter('site_transient_update_plugins', function ($transient) {
  if (!is_object($transient)) $transient = new stdClass();

  // Définition dynamique du plugin
  $organisation_github = 'ocade-fusion-system'; // ORGANISATION_GITHUB
  $plugin_slug = 'ocade-blocks'; // DEPOT_GITHUB
  $plugin_file = WP_PLUGIN_DIR . '/' . $plugin_slug . '/' . $plugin_slug . '.php';
  $version_url = 'https://raw.githubusercontent.com/' . $organisation_github . '/' . $plugin_slug . '/master/version.txt';
  $repo_url = 'https://github.com/' . $organisation_github . '/' . $plugin_slug;
  $zip_url = $repo_url . '/releases/latest/download/' . $plugin_slug . '.zip';

  // Icônes dynamiques
  $icon_base_url = 'https://raw.githubusercontent.com/' . $organisation_github . '/' . $plugin_slug . '/master/assets/icons/';
  $icons = [
    'svg'  => $icon_base_url . 'icon.svg',
    '1x'   => $icon_base_url . 'icon-1x.png',
    '2x'   => $icon_base_url . 'icon-2x.png',
    '3x'   => $icon_base_url . 'icon-3x.png',
    '4x'   => $icon_base_url . 'icon-4x.png',
    '5x'   => $icon_base_url . 'icon-5x.png',
  ];

  // Charger la fonction pour obtenir les infos du plugin
  if (!function_exists('get_plugin_data')) require_once ABSPATH . 'wp-admin/includes/plugin.php';
  if (!file_exists($plugin_file)) return $transient; // Sécurité : si le fichier du plugin n'existe pas

  $plugin_data = get_plugin_data($plugin_file);
  $current_version = $plugin_data['Version'];

  // Récupérer la version distante (mise en cache pour éviter les requêtes répétées)
  $remote_version = get_transient($plugin_slug . '_remote_version');
  if (false === $remote_version || is_null($remote_version)) {
    $response = wp_remote_get($version_url);
    if (is_wp_error($response)) return $transient;

    $remote_version = trim(wp_remote_retrieve_body($response));
    $remote_version = preg_replace('/[^0-9.]/', '', $remote_version); // Nettoyage
    $remote_version = trim($remote_version);
    set_transient($plugin_slug . '_remote_version', $remote_version, 6 * HOUR_IN_SECONDS);
  }

  // Comparaison des versions
  if (version_compare($remote_version, $current_version, '>')) {
    $plugin_basename = plugin_basename($plugin_file);

    $transient->response[$plugin_basename] = (object) [
      'slug'        => $plugin_slug,
      'plugin'      => $plugin_basename,
      'new_version' => $remote_version,
      'url'         => $repo_url,
      'package'     => $zip_url,
      'icons'       => $icons,
    ];
  }

  return $transient;
});

add_action('upgrader_process_complete', function ($upgrader_object, $options) {
  if ($options['action'] === 'update' && $options['type'] === 'plugin') {
    delete_transient('ocade-blocks_remote_version'); // Supprime le cache de version après mise à jour
  }
}, 10, 2);
