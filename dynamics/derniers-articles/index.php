<?php

function render_derniers_articles($attributes) {
  extract($attributes);
  $wrapper_attributes = get_block_wrapper_attributes();

  return '<div ' . $wrapper_attributes . '><h2>Derniers Articles</h2></div>';
}
