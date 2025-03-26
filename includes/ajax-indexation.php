<?php

/** Permet de regénérer l'index de recherche. */
add_action('wp_ajax_ocade_regenerer_index', function () {
  require_once plugin_dir_path(__FILE__) . '/indexer.php';
  ocade_indexer();
  wp_send_json_success('Indexation terminée.');
});

