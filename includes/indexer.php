<?php

/** Indexer les articles pour la recherche. */
function ocade_indexer() {
  $query = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => -1,
    'post_status' => 'publish'
  ]);

  $index = [];

  while ($query->have_posts()) {
    $query->the_post();
    $id = get_the_ID();
    $ngrammes = get_post_meta($id, '_ngrammes', true);

    if ($ngrammes) {
      foreach (explode(',', $ngrammes) as $mot) {
        $mot = trim(strtolower($mot));
        if (!isset($index[$mot])) $index[$mot] = [];
        $index[$mot][] = $id;
      }
    }
  }

  wp_reset_postdata();

  // Supprimer les doublons dans chaque entrée de mot-clé
  foreach ($index as $mot => $ids) {
    $index[$mot] = array_values(array_unique($ids));
  }

  // Crée le dossier s'il n'existe pas
  $index_dir = plugin_dir_path(__FILE__) . '/../index';
  if (!file_exists($index_dir)) mkdir($index_dir, 0755, true);

  // Enregistrement de l'index
  file_put_contents($index_dir . '/search-index.json', json_encode($index));
}
