// Nav Dark Mode Toggle
const body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector('.toggle'),
  modeSwitch = body.querySelector('.toggle-switch'),
  modeText = body.querySelector('.mode-text');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    modeText.innerText = 'Light mode';
  } else {
    modeText.innerText = 'Dark mode';
  }
});

// Navbar
const navBar = document.querySelector('.navbar');
allLi = document.querySelectorAll('.navbar ul li');

allLi.forEach((li, index) => {
  li.addEventListener('click', (e) => {
    // e.preventDefault(); //preventing from submitting
    navBar.querySelector('.active').classList.remove('active');
    li.classList.add('active');
  });
});

// New Menu Overlay
const btnNew = document.querySelector('.btn--new');
const btnExit = document.getElementById('btnNewMenuExit');
const frmNewMenuOverlay = document.querySelector('.menu__input--wrap');

if (btnNew) {
  btnNew.addEventListener('click', (e) => {
    e.preventDefault();
    frmNewMenuOverlay.classList.add('menu__input--wrap-active');
    frmNewMenuOverlay.classList.remove('menu__input--wrap-close');
  });
}

if (btnExit) {
  btnExit.addEventListener('click', (e) => {
    e.preventDefault();
    frmNewMenuOverlay.classList.remove('menu__input--wrap-active');
    frmNewMenuOverlay.classList.add('menu__input--wrap-close');
  });
}

// Delete Confirmation Overlay
const isActiveMenuAvail = document.querySelector('.active__data');
const ConfirmOverlay = document.querySelector('.confirm__overlay--wrap');
if (isActiveMenuAvail) {
  const btnMenus = document.querySelectorAll('.menu__list--delete');
  btnMenus.forEach((btnMenu, i) => {
    btnMenu.addEventListener('click', (e) => {
      e.preventDefault();
      ConfirmOverlay.classList.add('confirm__overlay--wrap-active');
      ConfirmOverlay.classList.remove('confirm__overlay--wrap-close');
    });
  });
}

if (ConfirmOverlay) {
  const btnCancel = document.getElementById('btnConfirmExit');
  btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    ConfirmOverlay.classList.add('confirm__overlay--wrap-close');
    ConfirmOverlay.classList.remove('confirm__overlay--wrap-active');
  });
}

// Current Affair Overlay
const isAffairOverlayAvail = document.querySelector(
  '.overlay__affair--input-wrap'
);

const isBtnNewCurrentAvail = document.querySelector('#new-affair');
if (isBtnNewCurrentAvail) {
  isBtnNewCurrentAvail.addEventListener('click', () => {
    isAffairOverlayAvail.classList.add('overlay__affair--visible');
  });
}

if (isAffairOverlayAvail) {
  const btnCloseOverlay = document.querySelector('.overlay__btn-close');
  btnCloseOverlay.addEventListener('click', () => {
    isAffairOverlayAvail.classList.remove('overlay__affair--visible');
  });
}
