// main.js
(() => {
  const header = document.querySelector('.site-header');
  const compactThreshold = 60; // en px

  window.addEventListener('scroll', () => {
    if (window.scrollY > compactThreshold) {
      header.classList.add('header--compact');
    } else {
      header.classList.remove('header--compact');
    }
  });
})();
