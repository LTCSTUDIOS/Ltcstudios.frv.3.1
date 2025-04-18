// script.js

// Change header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// Toggle mobile menu
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('open');
});

// Modal reservation
const modal   = document.getElementById('modal-book');
const openBtn = document.getElementById('open-book');
const closeBtn= document.getElementById('close-book');

openBtn.addEventListener('click', e => {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
