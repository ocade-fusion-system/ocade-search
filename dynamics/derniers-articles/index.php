<?php

function render_derniers_articles($attributes) {
  extract($attributes);
  $wrapper_attributes = get_block_wrapper_attributes();

  // Récupération des X derniers articles
  $nombre_articles = 10;

  $args = array(
    'post_type' => 'post',
    'posts_per_page' => $nombre_articles,
    'orderby' => 'date',
    'order' => 'DESC',
    'status' => 'publish'
  );

  if (is_category()) {
    $category = get_queried_object();
    if ($category) $args['category__in'] = array($category->term_id);
  }

  if (is_tag()) {
    $tag = get_queried_object();
    if ($tag) $args['tag__in'] = array($tag->term_id);
  }

  $query = new WP_Query($args);

  if (!$query->have_posts()) return '';

  // Génération du rendu
  ob_start();

  $categoryPrincipal = get_the_category();
  $categoryPrincipal = $categoryPrincipal[0]->name;
?>

  <ul <?= $wrapper_attributes; ?>>
    <?php while (have_posts()) : the_post(); ?>
      <li>
        <article>
          <a class="figure-link" href="<?= esc_url(get_the_permalink()); ?>" aria-label="Lire l’article : <?= esc_attr(get_the_title()); ?>" nofollow>
            <figure>
              <?= get_the_post_thumbnail(get_the_ID(), 'medium', ['alt' => esc_attr(get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', true)), 'loading' => 'lazy']); ?>
            </figure>
          </a>
          <div>
            <header>
              <span>
                <a href="<?= esc_url(get_category_link(get_the_category()[0]->term_id)); ?>"
                  aria-label="Catégorie : <?= esc_attr(get_the_category()[0]->name); ?>">
                  <?= esc_html(get_the_category()[0]->name); ?>
                </a>
              </span>
              <time datetime="<?= get_the_date('Y-m-d'); ?>">
                <?= esc_html(get_the_date('d.m.Y')); ?>
              </time>
            </header>
            <h3>
              <a href="<?= esc_url(get_the_permalink()); ?>"
                aria-label="Lire l’article : <?= esc_attr(get_the_title()); ?>">
                <?= esc_html(get_the_title()); ?>
              </a>
            </h3>
            <p><?= esc_html(get_the_excerpt()); ?></p>
            <?php
            $tags = get_the_tags();
            if ($tags) : ?>
              <div class="news-tags">
                <?php foreach ($tags as $tag) : ?>
                  <a href="<?= esc_url(get_tag_link($tag->term_id)); ?>" class="news-tag">
                    #<?= esc_html($tag->name); ?>
                  </a>
                <?php endforeach; ?>
              </div>
            <?php endif; ?>
            <footer>
              <a href="<?= esc_url(get_the_permalink()); ?>"
                aria-label="Lire la suite de l’article : <?= esc_attr(get_the_title()); ?>" nofollow>
                Lire la suite
              </a>
            </footer>
          </div>
        </article>
      </li>
    <?php endwhile; ?>
  </ul>




<?php return ob_get_clean();
}
