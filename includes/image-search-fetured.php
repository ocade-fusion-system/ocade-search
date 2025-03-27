<?php

// Ajouter un champ image pour le moteur de recherche
function ocade_add_search_thumbnail_meta_box() {
  add_meta_box(
    'ocade_search_thumbnail',
    'Image moteur de recherche (64x64)',
    'ocade_render_search_thumbnail_meta_box',
    'post', // ou 'page', ou ton CPT
    'side',
    'core' // ← pour apparaître sous l’image à la une
  );
}
add_action('add_meta_boxes', 'ocade_add_search_thumbnail_meta_box');


// Affichage du champ image
function ocade_render_search_thumbnail_meta_box($post) {
  $image_id = get_post_meta($post->ID, '_ocade_search_thumbnail_id', true);
  $image_url = $image_id ? wp_get_attachment_image_url($image_id, 'thumbnail') : '';

  // Champ caché pour l’ID de l’image
  echo '<input type="hidden" id="ocade_search_thumbnail_id" name="ocade_search_thumbnail_id" value="' . esc_attr($image_id) . '">';

  // Aperçu de l’image actuelle
  echo '<div id="ocade_search_thumbnail_preview" style="margin-bottom:10px;">';
  if ($image_url) {
    echo '<img src="' . esc_url($image_url) . '" style="width:64px;height:64px;border-radius:4px;">';
  }
  echo '</div>';

  // Bouton d'ajout/suppression
  echo '<p><button type="button" class="button" id="ocade_search_thumbnail_upload">Sélectionner une image</button></p>';
  echo '<p><button type="button" class="button" id="ocade_search_thumbnail_remove">Supprimer</button></p>';

  echo '<style>
  #ocade_search_thumbnail_preview img {
    width: 64px;
    height: 64px;
    border-radius: 4px;
    display: block;
    margin-bottom: 10px;
  }

  #ocade_search_thumbnail_upload,
  #ocade_search_thumbnail_remove {
    width: 100%;
    margin-bottom: 5px;
  }

  .edit-post-meta-boxes-area .postbox#ocade_search_thumbnail .handle-order-higher, 
  .edit-post-meta-boxes-area .postbox#ocade_search_thumbnail .handle-order-lower
   {
    width: initial;
    height: initial;
  } 
</style>';

// Script pour gérer la sélection via la médiathèque
?>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const uploadButton = document.getElementById('ocade_search_thumbnail_upload');
      const removeButton = document.getElementById('ocade_search_thumbnail_remove');
      const preview = document.getElementById('ocade_search_thumbnail_preview');
      const input = document.getElementById('ocade_search_thumbnail_id');

      uploadButton.addEventListener('click', function() {
        const frame = wp.media({
          title: 'Choisir une image pour le moteur de recherche',
          button: {
            text: 'Utiliser cette image'
          },
          multiple: false
        });

        frame.on('select', function() {
          const attachment = frame.state().get('selection').first().toJSON();
          input.value = attachment.id;
          preview.innerHTML = '<img src="' + attachment.sizes.thumbnail.url + '" style="width:64px;height:64px;border-radius:4px;">';
        });

        frame.open();
      });

      removeButton.addEventListener('click', function() {
        input.value = '';
        preview.innerHTML = '';
      });
    });
  </script>
<?php
}

function ocade_save_search_thumbnail_meta($post_id) {
  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
  if (isset($_POST['ocade_search_thumbnail_id'])) {
    update_post_meta($post_id, '_ocade_search_thumbnail_id', intval($_POST['ocade_search_thumbnail_id']));
  }
}
add_action('save_post', 'ocade_save_search_thumbnail_meta');


// Ajouter le champ image dans l’API REST
add_action('rest_api_init', function () {
  register_rest_field('post', 'ocade_search_image', [
    'get_callback' => function ($post_arr) {
      $id = $post_arr['id'];
      $image_id = get_post_meta($id, '_ocade_search_thumbnail_id', true);
      return $image_id ? wp_get_attachment_image_url($image_id, 'thumbnail') : null;
    },
    'schema' => [
      'description' => 'Image pour le moteur de recherche',
      'type' => 'string',
      'format' => 'uri',
      'context' => ['view', 'edit'],
    ],
  ]);
});
