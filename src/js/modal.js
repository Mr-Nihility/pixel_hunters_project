(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    checkbox: document.querySelector('[data-checkbox]'),
    customCheckbox: document.querySelector('[data-custom-checkbox]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.checkbox.addEventListener('click', () => {
    const checked = refs.checkbox.checked === true || false;
    refs.customCheckbox.setAttribute('aria-checked', checked);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
