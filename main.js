<!-- Script pour charger le menu -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      fetch('menu.html') // Chemin relatif à la racine ou au dossier
        .then(response => {
          if (!response.ok) {
            throw new Error('Erreur réseau : ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('menu-container').innerHTML = data;

          // Après insertion, initialiser le menu burger si nécessaire
          initMenuBurger();
        })
        .catch(error => {
          console.error('Erreur lors du chargement du menu:', error);
        });
    });

    function initMenuBurger() {
      const burger = document.getElementById('burger');
      const menuDrawer = document.getElementById('menuDrawer');

      if (burger && menuDrawer) {
        burger.addEventListener('click', () => {
          menuDrawer.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
          if (!menuDrawer.contains(e.target) && !burger.contains(e.target)) {
            menuDrawer.classList.remove('active');
          }
        });
      }
    }
  </script>