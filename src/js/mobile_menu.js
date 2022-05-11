(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const innerBtnRef = document.querySelector('[data-inner-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector('body');
  const modal = document.querySelector('[data-modal]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  });
  innerBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    modal.classList.toggle('is-hidden');
    menuBtnRef.classList.toggle('is-open');
  });
})();
