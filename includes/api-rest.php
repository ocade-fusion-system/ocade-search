<?php 

/** Renseigne la route REST pour les ngrammes. */
add_action('rest_api_init', function () {
  register_rest_field('post', 'ngrammes', [
    'get_callback'    => function ($post_arr) {
      return get_post_meta($post_arr['id'], '_ngrammes', true);
    },
    'update_callback' => function ($value, $post_obj) {
      update_post_meta($post_obj->ID, '_ngrammes', sanitize_text_field($value));
    },
    'schema'          => [
      'description' => 'Ngrammes pour le moteur de recherche',
      'type'        => 'string',
      'context'     => ['view', 'edit', 'embed'],
    ],
  ]);
});
