// main.js
(() => {
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 100) {
      // on scroll down → on compacte / cache partiellement
      header.classList.add('header--compact');
    } else {
      // on scroll up → on revient à l'état normal
      header.classList.remove('header--compact');
    }
    lastScroll = current;
  });
})();
