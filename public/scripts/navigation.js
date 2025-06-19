const menuBtn = document.getElementById('menu-button');
const navPanel = document.getElementById('nav-panel');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  navPanel.classList.toggle('open');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  navPanel.classList.remove('open');
  overlay.classList.remove('active');
});
