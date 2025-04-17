// Fichier vide ou à compléter pour animations/transitions
document.addEventListener('DOMContentLoaded', () => {
  // Ex : effet de fade-in sur .hero
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = 0;
    setTimeout(() => hero.style.opacity = 1, 100);
  }
});
