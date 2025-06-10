// Chargement du menu et gestion du menu burger
document.addEventListener('DOMContentLoaded', () => {
  fetch('menu.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur de chargement du menu');
      }
      return response.text();
    })
    .then(html => {
      const container = document.getElementById('menu-container');
      if (container) {
        container.innerHTML = html;

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
    })
    .catch(error => console.error('Erreur lors du chargement du menu:', error));
});
