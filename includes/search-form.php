<?php

function ocade_render_search_form() { ?>
  <dialog id="ocade-search-dialog" aria-labelledby="dialog-title">
    <div>
      <button id="ocade-search-close" aria-label="Fermer la recherche" title="Fermer la recherche d'article" onclick="document.getElementById('ocade-search-dialog').close();document.body.classList.remove('modal-open');">×</button>

      <p id="dialog-title">RECHERCHER UN ARTICLE</p>

      <form
        id="ocade-search-form"
        role="search"
        method="get"
        action="<?php echo esc_url(home_url('/')); ?>"
        aria-label="Recherche d’articles sur le site">

        <?php $valeur_recherche = isset($_GET['s']) ? esc_attr($_GET['s']) : ''; ?>
        <input
          type="text"
          id="ocade-search-input"
          name="s"
          placeholder="Ex : automatisation n8n"
          autocomplete="off"
          aria-describedby="ocade-search-help"
          aria-label="Champ de recherche"
          value="<?php echo $valeur_recherche; ?>"
          onkeydown="
          if (event.key === 'Enter') event.preventDefault();
          else if (event.key === 'ArrowDown') {
            const link = document.querySelector('#ocade-search-results a');
            if (link) {
              event.preventDefault();
              link.focus();
            }
          }
        "
>

        <input type="hidden" name="post_type" value="post">

        <p id="ocade-search-help" class="screen-reader-text">
          Tapez votre recherche et les résultats s’afficheront automatiquement en dessous.
        </p>
      </form>
      <div id="ocade-search-results" style="margin-top:20px;"></div>
    </div>
  </dialog>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const input = document.getElementById('ocade-search-input');
      const resultsDiv = document.getElementById('ocade-search-results');

      let timeout;
      let index = null;
      let indexLoaded = false;

      function normalize(text) {
        return text
          .toLowerCase()
          .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9 ]/g, '')
          .trim();
      }

      function lancerRecherche() {
        const inputValue = input.value;
        const terms = normalize(inputValue).split(/\s+/).filter(Boolean);
        if (terms.length === 0) {
          resultsDiv.innerHTML = '';
          return;
        }

        let matchingIDs = null;

        terms.forEach((term) => {
          let motsMatchés = [];

          // Recherche stricte sauf si le mot est très court (<3 caractères)
          if (term.length < 3) {
            motsMatchés = Object.keys(index).filter(key => key.includes(term));
          } else {
            motsMatchés = Object.keys(index).filter(key => key.startsWith(term));
          }

          const idsTrouvés = motsMatchés
            .flatMap(key => index[key])
            .filter((v, i, a) => a.indexOf(v) === i); // supprime doublons

          if (idsTrouvés.length > 0) {
            matchingIDs = matchingIDs ?
              matchingIDs.filter(id => idsTrouvés.includes(id)) :
              idsTrouvés.slice();
          }
        });

        if (!matchingIDs || matchingIDs.length === 0) {
          resultsDiv.innerHTML = '<p>Aucun résultat trouvé.</p>';
          return;
        }

        const uniqueIDs = [...new Set(matchingIDs)];
        const query = 'include=' + uniqueIDs.join(',');

        // Debug
        console.log('matchingIDs (uniques) :', uniqueIDs);
        console.log('Requête REST finale :', '<?php echo esc_url(rest_url('wp/v2/posts?_embed&per_page=10&')); ?>' + query);

        fetch('<?php echo esc_url(rest_url('wp/v2/posts')); ?>?_embed=true&per_page=10&' + query)
          .then(res => res.json())
          .then(posts => {
            const html = posts.map(post => {
              const img = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
              return `
                <div>
                  <a href="${post.link}">${img ? `<img src="${img}">` : ''} ${post.title.rendered}</a>
                </div>
              `;
            }).join('');
            resultsDiv.innerHTML = html;
          });
      }

      input.addEventListener('input', function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (!indexLoaded) {
            fetch('<?php echo plugins_url('../index/search-index.json', __FILE__); ?>')
              .then(res => res.json())
              .then(data => {
                index = data;
                indexLoaded = true;
                lancerRecherche();
              });
          } else {
            lancerRecherche();
          }
        }, 50);
      });

      if (input.value.trim().length > 0) {
        fetch('<?php echo plugins_url('../index/search-index.json', __FILE__); ?>')
          .then(res => res.json())
          .then(data => {
            index = data;
            indexLoaded = true;
            lancerRecherche();
          });
      }
    });
  </script>
<?php
}
add_action('ocade_search_form', 'ocade_render_search_form');
