<?php

/** Renseigne la route REST pour les ngrammes. */
add_action('init', function () {
  register_meta('post', '_ngrammes', [
    'type'              => 'string',
    'single'            => true,
    'sanitize_callback' => 'sanitize_text_field',
    'show_in_rest'      => true, // C'est cette ligne qui est indispensable
    'auth_callback'     => function () {
      return current_user_can('edit_posts');
    },
  ]);
});
