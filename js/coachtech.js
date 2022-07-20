const target = document.getElementById("hamburger");
target.addEventListener('click', () => {
  const target = document.getElementById("hamburger");
  target.classList.toggle('open');
  const nav = document.getElementById("globalMenuSp");
  nav.classList.toggle('in');
});
