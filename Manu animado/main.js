const menus = document.querySelector('.nav__img');

menus.addEventListener('click', () => {
  const menuOption = document.querySelector('.list');
  menuOption.classList.toggle('list--show');
});
