<?php

/** Ajouter un champs personnalisé pour les ngrammes dans les articles. */
function ajouter_champ_ngrammes() {
  add_meta_box(
    'champ_ngrammes', // ID
    'Ngrammes (pour la recherche)', // Titre
    'render_champ_ngrammes', // Fonction de rendu
    'post', // Type de contenu
    'normal', // Emplacement
    'high' // Priorité
  );
}
add_action('add_meta_boxes', 'ajouter_champ_ngrammes');

/** Rendu du champ personnalisé pour les ngrammes. */
function render_champ_ngrammes($post) {
  $valeur = get_post_meta($post->ID, '_ngrammes', true);

  echo '<div style="background:#f9f9f9; border-left: 4px solid #007cba; padding: 10px 15px; font-size: 14px; margin-bottom: 1rem;">
    <strong>💡 Bonnes pratiques pour remplir les ngrammes :</strong>
    <ul style="margin: 0.5em 0 0 1em; padding-left: 1em; list-style-type: disc;">
      <li>Vérifier que TOUT les termes du titre sois dans la liste.</li>
      <li>Sépare chaque expression par une <strong>virgule</strong></li>
      <li>Utilise des mots-clés ou expressions que les gens pourraient taper</li>
      <li>Évite les petits mots inutiles : "de", "et", "la", etc.</li>
      <li>Pas de majuscules, ni d’accents (ex: <code>installation n8n</code>)</li>
      <li>Utilise des expressions de 1 à 4 mots maximum</li>
    </ul>
    <p style="margin-top:0.5em;"><strong>Exemple :</strong> <code>n8n, installation n8n, automatiser une tâche, créer un workflow</code></p>
  </div>';

  echo '<textarea name="champ_ngrammes" rows="4" style="width:100%; margin-bottom: 1em;">' . esc_textarea($valeur) . '</textarea>';
}


/** Sauvegarde du champ personnalisé pour les ngrammes. */
function sauvegarder_champ_ngrammes($post_id) {
  if (array_key_exists('champ_ngrammes', $_POST)) {
    update_post_meta(
      $post_id, // ID de l'article
      '_ngrammes', // Clé
      sanitize_text_field($_POST['champ_ngrammes']) // Valeur
    );
  }
}
add_action('save_post', 'sauvegarder_champ_ngrammes');
