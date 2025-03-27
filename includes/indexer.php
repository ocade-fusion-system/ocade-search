<?php

/** Normalise un mot comme dans le JS (ex : docker-compose => docker-compose) */
function ocade_normalize($text) {
  $text = strtolower($text);
  $text = iconv('UTF-8', 'ASCII//TRANSLIT', $text); // enlève accents
  $text = preg_replace('/[^a-z0-9\- ]/', '', $text); // garde lettres, chiffres, espaces, tirets
  $text = trim($text);
  return $text;
}

/** Indexer les articles pour la recherche */
function ocade_indexer() {
  // Liste des mots à ignorer (comme en JS)
  $stop_words = [
    'je',
    'tu',
    'il',
    'elle',
    'on',
    'nous',
    'vous',
    'ils',
    'elles',
    'le',
    'la',
    'les',
    'de',
    'du',
    'des',
    'un',
    'une',
    'et',
    'ou',
    'en',
    'dans',
    'sur',
    'ce',
    'cet',
    'cette',
    'mon',
    'ma',
    'mes',
    'ton',
    'ta',
    'tes',
    'son',
    'sa',
    'ses',
    'leur',
    'leurs',
    'ne',
    'pas',
    'plus',
    'a',
    'au',
    'aux',
    'avec',
    'par',
    'pour',
    'que',
    'qui',
    'quoi',
    'dont',
    'ou',
    'comme',
    'mais',
    'donc',
    'or',
    'ni',
    'car',
    'veux',
    'veut'
  ];

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
        $mot = ocade_normalize($mot);

        // Ignore mots trop courts ou stop words
        if (strlen($mot) < 3 || in_array($mot, $stop_words)) {
          continue;
        }

        if (!isset($index[$mot])) {
          $index[$mot] = [];
        }

        $index[$mot][] = $id;
      }
    }
  }

  wp_reset_postdata();

  // Supprimer les doublons dans chaque liste d’IDs
  foreach ($index as $mot => $ids) {
    $index[$mot] = array_values(array_unique($ids));
  }

  // Créer le dossier s’il n’existe pas
  $index_dir = plugin_dir_path(__FILE__) . '/../index';
  if (!file_exists($index_dir)) {
    mkdir($index_dir, 0755, true);
  }

  // Enregistrement du fichier JSON
  file_put_contents($index_dir . '/search-index.json', json_encode($index));
}
