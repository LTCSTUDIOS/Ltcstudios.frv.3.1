document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('booking-modal');
  const modalClose = modal.querySelector('.modal-close');
  const serviceName = document.getElementById('modal-service-name');
  const dateInput = document.getElementById('modal-date');
  const confirmBtn = document.getElementById('confirm-book');

  // Initialise Flatpickr
  flatpickr(dateInput, {
    enableTime: true,
    dateFormat: "d/m/Y H:i",
    minDate: "today",
    minuteIncrement: 30
  });

  // Ouvre le modal pour chaque bouton “Réserver”
  document.querySelectorAll('.btn-book').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.service-card');
      const title = card.querySelector('h2').textContent;
      serviceName.textContent = `Réserver : ${title}`;
      dateInput.value = '';
      modal.style.display = 'flex';
    });
  });

  // Fermer modal
  modalClose.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Simule le pre‑paiement
  confirmBtn.addEventListener('click', () => {
    if (!dateInput.value) {
      alert("Merci de choisir un créneau avant de confirmer.");
      return;
    }
    alert(`Acompte 20 % validé pour le ${dateInput.value}.\nMerci !`);
    modal.style.display = 'none';
  });
});
