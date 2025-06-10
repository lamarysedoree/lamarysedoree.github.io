// Gestion du menu burger
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