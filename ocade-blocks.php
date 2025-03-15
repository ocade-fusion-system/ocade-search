<?php 
/**
 * Plugin Name: Ocade Blocks Ocade Fusion
 * Theme URI: https://github.com/ocade-fusion-system/ocade-blocks
 * Author: Ocade Fusion
 * Author Name: Valentin Charrier
 * Description: Plugins de blocks Gutenberg pour le site Ocade Fusion.
 * Text Domain: ocade-blocks
 * Version: 1.0.4
 */

 
// Chargement du système de mise à jour
define("ORGANISATION_GITHUB", 'ocade-fusion-system'); // Nom de l'organisation GitHub
define("DEPOT_GITHUB", 'ocade-blocks'); // Nom du dépôt GitHub
define('OCADE_IS_THEME', false); // True = Thème / False = Plugin
define('OCADE_IS_CHILD_THEME', false); // Est le thème enfant ?
define('OCADE_PLUGIN_SLUG', 'ocade-blocks'); // Slug du plugin

// Partie dynamique
define('OCADE_PLUGIN_REPO', 'https://github.com/' . ORGANISATION_GITHUB . '/' . DEPOT_GITHUB);
define('OCADE_VERSION_URL', OCADE_PLUGIN_REPO . '/releases/latest/download/version.txt');
define('OCADE_ZIP_URL', OCADE_PLUGIN_REPO . '/releases/latest/download/'.DEPOT_GITHUB.'.zip');
define('OCADE_REMOTE_VERSION', DEPOT_GITHUB . '_remote_version');
define('OCADE_ICON_SVG_URL', 'https://raw.githubusercontent.com/' . ORGANISATION_GITHUB . '/' . DEPOT_GITHUB .'/master/assets/icons/icon.svg');
define('OCADE_ICON_1X_URL',  'https://raw.githubusercontent.com/' . ORGANISATION_GITHUB . '/' . DEPOT_GITHUB .'/master/assets/icons/icon-1x.png');
define('OCADE_ICON_2X_URL',  'https://raw.githubusercontent.com/' . ORGANISATION_GITHUB . '/' . DEPOT_GITHUB .'/master/assets/icons/icon-2x.png');
define('OCADE_ICON_3X_URL',  'https://raw.githubusercontent.com/' . ORGANISATION_GITHUB . '/' . DEPOT_GITHUB .'/master/assets/icons/icon-3x.png');
define('OCADE_ICON_4X_URL',  'https://raw.githubusercontent.com/' . ORGANISATION_GITHUB . '/' . DEPOT_GITHUB .'/master/assets/icons/icon-4x.png');
define('OCADE_ICON_5X_URL',  'https://raw.githubusercontent.com/' . ORGANISATION_GITHUB . '/' . DEPOT_GITHUB .'/master/assets/icons/icon-5x.png');

switch (true) {
  case OCADE_IS_THEME:
    require_once get_template_directory() . '/inc/theme-updater.php';
    break;
  case OCADE_IS_CHILD_THEME:
    require_once get_stylesheet_directory() . '/inc/theme-updater.php';
    break;
  default:
    require_once plugin_dir_path( __FILE__ ) . 'inc/theme-updater.php';
    break;
}


/******************* DEBUT DU PLUGIN *******************************/
/** Register PHP Loader  */
require_once(plugin_dir_path(__FILE__) . 'structure/PHP/index.php');

// Enregistre tous les fichiers CSS du dossier "styles" dans le front-end et l'éditeur Gutenberg 
function register_all_styles_folder()
{
  $styles_dir = plugin_dir_path(__FILE__) . 'styles/';
  $styles_url = plugin_dir_url(__FILE__) . 'styles/';
  $css_files = glob($styles_dir . '*.css');
  foreach ($css_files as $file) {
    $file_name = basename($file); // Récupère le nom du fichier (ex: "header.css")
    $handle = 'ocade-blocks-' . str_replace('.css', '', $file_name); // Création d'un handle unique
    $file_url = $styles_url . $file_name;
    wp_enqueue_style($handle, $file_url, array(), '1.0', 'all');
    wp_enqueue_style($handle . '-editor', $file_url, array(), '1.0', 'all');
  }
}
add_action('enqueue_block_editor_assets', 'register_all_styles_folder');
add_action('wp_enqueue_scripts', 'register_all_styles_folder');