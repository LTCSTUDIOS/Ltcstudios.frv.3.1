// On ajoute la classe "scrolled" au header dès qu'on descend un peu
window.addEventListener('scroll', () => {
  const hdr = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    hdr.classList.add('scrolled');
  } else {
    hdr.classList.remove('scrolled');
  }
});
