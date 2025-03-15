<?php
// Sécurité : empêcher l'accès direct
if (!defined('ABSPATH')) exit;

add_filter('site_transient_update_plugins', function ($transient) {
  if (!is_object($transient)) $transient = new stdClass();

  // Charger la fonction pour obtenir les infos du plugin
  if (!function_exists('get_plugin_data')) {
    require_once ABSPATH . 'wp-admin/includes/plugin.php';
  }

  $plugin_data = get_plugin_data(WP_PLUGIN_DIR . '/' . OCADE_PLUGIN_SLUG . '/' . OCADE_PLUGIN_SLUG . '.php');
  $current_version = $plugin_data['Version'];

  // Récupérer la version distante (version.txt)
  $remote_version = get_transient(OCADE_REMOTE_VERSION);
  if (false === $remote_version) {
    $response = wp_remote_get(OCADE_VERSION_URL);
    if (is_wp_error($response)) return $transient;

    $remote_version = trim(wp_remote_retrieve_body($response));
    $remote_version = preg_replace('/[^0-9.]/', '', $remote_version);
    set_transient(OCADE_REMOTE_VERSION, $remote_version, 6 * HOUR_IN_SECONDS);
  }

  // Comparaison des versions
  if (version_compare($remote_version, $current_version, '>')) {
    if (!isset($transient->response)) $transient->response = []; // Assurez-vous que c'est un tableau

    $transient->response[$theme_slug] = [
      'theme'       => $theme_slug,
      'new_version' => $remote_version,
      'url'         => OCADE_PLUGIN_REPO,
      'package'     => OCADE_ZIP_URL,
      'icons'       => [
        'svg'  => OCADE_ICON_SVG_URL,    // URL vers une icône SVG
        '1x'   => OCADE_ICON_1X_URL,     // URL pour une image standard (150x150 px recommandé)
        '2x'   => OCADE_ICON_2X_URL,     // URL pour les écrans haute résolution
        '3x'   => OCADE_ICON_3X_URL,     // URL pour les écrans haute résolution
        '4x'   => OCADE_ICON_4X_URL,     // URL pour les écrans haute résolution
        '5x'   => OCADE_ICON_5X_URL,     // URL pour les écrans haute résolution
      ],
    ];
  }

  return $transient;
});

add_action('upgrader_process_complete', function ($upgrader_object, $options) {
  if ($options['action'] === 'update' && $options['type'] === 'plugin') {
    delete_transient(OCADE_REMOTE_VERSION);
  }
}, 10, 2);
