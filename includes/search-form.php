<?php

function ocade_render_search_form() { ?>
  <dialog id="ocade-search-dialog" aria-labelledby="dialog-title">
    <div>
      <button id="ocade-search-close" aria-label="Fermer la recherche" title="Fermer la recherche d'article" onclick="document.getElementById('ocade-search-dialog').close();document.body.classList.remove('modal-open');">×</button>

      <p id="dialog-title">RECHERCHER UN ARTICLE</p>

      <form id="ocade-search-form" role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>" aria-label="Recherche d’articles sur le site">
        <div class="wrapper-loader" style="position: relative;">
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
              }">
          <div id="ocade-loader" style="display: none;">
            <svg width="20" height="20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
              <circle cx="50" cy="50" fill="none" stroke="#303579" stroke-width="10" r="35"
                stroke-dasharray="164.93361431346415 56.97787143782138"></circle>
            </svg>
          </div>
        </div>

        <input type="hidden" name="post_type" value="post">
        <p id="ocade-search-help" class="screen-reader-text">
          Tapez votre recherche et les résultats s’afficheront automatiquement en dessous.
        </p>
      </form>

      <div id="ocade-all-filters"></div>
      <div id="ocade-active-filters"></div>
      <div id="ocade-search-results">
        <p id="ocade-info-message">Chargement des derniers articles...</p>
      </div>
    </div>
  </dialog>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const input = document.getElementById('ocade-search-input');
      const resultsDiv = document.getElementById('ocade-search-results');
      const loader = document.getElementById('ocade-loader');
      const infoMessage = document.getElementById('ocade-info-message');
      const filtresActifsDiv = document.getElementById('ocade-active-filters');
      const tousLesFiltresDiv = document.getElementById('ocade-all-filters');

      let timeout;
      let index = null;
      let indexLoaded = false;
      let filtresActifs = [];

      function normalizeAndFilterTerms(text) {
        const stopWords = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les', 'de', 'du', 'des', 'un', 'une', 'et', 'ou', 'en', 'dans', 'sur', 'ce', 'cet', 'cette', 'mon', 'ma', 'mes', 'ton', 'ta', 'tes', 'son', 'sa', 'ses', 'leur', 'leurs', 'ne', 'pas', 'plus', 'a', 'au', 'aux', 'avec', 'par', 'pour', 'que', 'qui', 'quoi', 'dont', 'où', 'comme', 'mais', 'donc', 'or', 'ni', 'car', 'veux', 'veut'];
        return text
          .toLowerCase()
          .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9\- ]/g, ' ')
          .split(/\s+/)
          .filter(term => term.length >= 3 && !stopWords.includes(term));
      }

      function afficherFiltresActifs() {
        filtresActifsDiv.innerHTML = filtresActifs.length === 0 ? '' : filtresActifs.map(f =>
          `<button onclick="toggleFiltre('${f}')">${f} ⨉</button>`
        ).join('');
      }

      function afficherTousLesFiltres(index) {
        const compteur = {};
        Object.entries(index).forEach(([mot, idList]) => {
          compteur[mot] = idList.length;
        });

        const filtresTries = Object.entries(compteur)
          .sort((a, b) => a[1] - b[1])
          .map(([mot]) => mot);

        tousLesFiltresDiv.innerHTML = filtresTries.map(mot => `
          <button onclick="toggleFiltre('${mot}')" id="filtre-${mot}">${mot}</button>
        `).join('');
      }

      window.toggleFiltre = function(mot) {
        filtresActifs = filtresActifs.includes(mot) ? filtresActifs.filter(m => m !== mot) : [...filtresActifs, mot];
        afficherFiltresActifs();
        lancerRecherche();
      }

      function lancerRecherche() {
        const termsTexte = normalizeAndFilterTerms(input.value);
        const allTerms = [...termsTexte, ...filtresActifs];

        if (allTerms.length === 0) {
          infoMessage.textContent = 'Merci de saisir au moins un mot-clé significatif.';
          return;
        }

        let matchingIDs = null;

        for (let term of allTerms) {
          const motsMatchés = Object.keys(index).filter(key => key.startsWith(term));
          if (motsMatchés.length === 0) continue;

          const idsTrouvés = [...new Set(motsMatchés.flatMap(key => index[key]))];
          matchingIDs = matchingIDs ? matchingIDs.filter(id => idsTrouvés.includes(id)) : idsTrouvés;

          if (matchingIDs.length === 0) break;
        }

        if (!matchingIDs || matchingIDs.length === 0) {
          resultsDiv.innerHTML = '<p>Aucun résultat trouvé.</p>';
          return;
        }

        const query = 'include=' + [...new Set(matchingIDs)].join(',');
        loader.style.display = 'flex';

        fetch('<?php echo esc_url(rest_url('wp/v2/posts')); ?>?_embed=true&per_page=10&' + query)
          .then(res => res.json())
          .then(posts => {
            infoMessage.textContent = '';
            resultsDiv.innerHTML = posts.map(post => {
              const img = post.ocade_search_image || '';
              return `<div class="resultat-recherche"><a href="${post.link}">${img ? `<img src="${img}">` : ''} ${post.title.rendered}</a></div>`;
            }).join('');
          })
          .finally(() => loader.style.display = 'none');
      }

      function chargerDerniersArticles() {
        loader.style.display = 'flex';
        fetch('<?php echo esc_url(rest_url('wp/v2/posts?_embed=true&per_page=5')); ?>')
          .then(res => res.json())
          .then(posts => {
            infoMessage.textContent = 'Les derniers articles :';
            resultsDiv.innerHTML = posts.map(post => {
              const img = post.ocade_search_image || '';
              return `<div class="resultat-recherche"><a href="${post.link}">${img ? `<img src="${img}">` : ''} ${post.title.rendered}</a></div>`;
            }).join('');
          })
          .finally(() => loader.style.display = 'none');
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
                afficherTousLesFiltres(index);
                lancerRecherche();
              });
          } else {
            lancerRecherche();
          }
        }, 150);
      });

      // Chargement initial : derniers articles + index de recherche
      chargerDerniersArticles();

      fetch('<?php echo plugins_url('../index/search-index.json', __FILE__); ?>')
        .then(res => res.json())
        .then(data => {
          index = data;
          indexLoaded = true;
          afficherTousLesFiltres(index);
        });

    });
  </script>
<?php }
add_action('ocade_search_form', 'ocade_render_search_form');
