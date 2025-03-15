<?php 

/** Liste des blocks du plugin. */
if (!function_exists('getBlocks')) {
  function getBlocks($dynamic = false) {
    $blocks = [];

    $folder = $dynamic ? 'dynamics' : 'build';
    $dir = __DIR__ . '/../../' . $folder . '/';

    if (is_dir($dir)) {
      $elements = scandir($dir);
      foreach ($elements as $element) {
        if ($folder === 'build' && $element === 'images') continue;
        if ($element !== "." && $element !== "..") {
          if (is_dir($dir . $element)) $blocks[] = $element;
        }
      }
    }
    return $blocks ?? [];
  }
}

/** Enregistrement des blocks. */
if (!function_exists('resisterBlocks')) {
  function registerBlocks() {
    $dynamicsBlocks = getBlocks(true);
    foreach ($dynamicsBlocks as $block) {
      require_once(plugin_dir_path(__FILE__) . '../../dynamics/' . $block . "/index.php");
      if (function_exists('render_' . str_replace('-', '_', $block))) {
        $folder = plugin_dir_path(__FILE__) . '../../build/' . $block;
        $settings = ['render_callback' => 'render_' . str_replace('-', '_', $block)];
        register_block_type_from_metadata($folder, $settings);
      }
    }
    $blocks = getBlocks();
    foreach ($blocks as $block) {
      if (!in_array($block, $dynamicsBlocks) && file_exists(plugin_dir_path(__FILE__) . '../../build/' . $block . '/index.asset.php')) {
        register_block_type(plugin_dir_path(__FILE__) . '../../build/' . $block);
      }
    }
  }
}
add_action('init', __NAMESPACE__ . '\registerBlocks');
