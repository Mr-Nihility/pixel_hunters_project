(() => {
  const textBtnRef = document.querySelector('[data-text-button]');
  const text = document.querySelector('[data-text]');

  textBtnRef.addEventListener('click', () => {
    const expanded = textBtnRef.getAttribute('aria-expanded') === 'true' || false;
    textBtnRef.classList.toggle('is-hidden');
    textBtnRef.setAttribute('aria-expanded', !expanded);
    text.classList.toggle('is-hidden');
  });
})();
