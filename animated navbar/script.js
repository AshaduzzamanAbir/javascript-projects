const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');


open.addEventListener('click', openMenu = () => {
  container.classList.add('show-nav');
})
close.addEventListener('click', closeMenu = () => {
  container.classList.remove('show-nav');
})

