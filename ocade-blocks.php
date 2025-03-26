<?php

/**
 * Plugin Name: Ocade Blocks Ocade Fusion
 * Theme URI: https://github.com/ocade-fusion-system/ocade-blocks
 * Author: Ocade Fusion
 * Author Name: Valentin Charrier
 * Description: Plugins de blocks Gutenberg pour le site Ocade Fusion.
 * Text Domain: ocade-blocks
 * Version: 1.0.32
 */

require_once plugin_dir_path(__FILE__) . 'inc/plugin-updater.php';

/******************* DEBUT DU PLUGIN *******************************/
/** Register PHP Loader  */
require_once(plugin_dir_path(__FILE__) . 'structure/PHP/index.php');

// Enregistre tous les fichiers CSS du dossier "styles" dans le front-end et l'éditeur Gutenberg 
function register_all_styles_folder() {
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
