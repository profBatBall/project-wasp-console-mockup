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

// Text Effects
const inputs = document.querySelectorAll('input');
inputs.forEach((el) => {
  el.addEventListener('blur', (e) => {
    if (e.target.value) {
      e.target.classList.add('dirty');
    } else {
      e.target.classList.remove('dirty');
    }
  });
});

// New Menu Overlay
const btnNew = document.querySelector('.btn--new');
const btnCancel = document.getElementById('btnNewMenuOverlay');
const frmNewMenuOverlay = document.querySelector('.menu__input--wrap');

if (btnNew) {
  btnNew.addEventListener('click', (e) => {
    e.preventDefault();
    frmNewMenuOverlay.classList.add('menu__input--wrap-active');
    frmNewMenuOverlay.classList.remove('menu__input--wrap-close');
  });
}

if (btnCancel) {
  btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    frmNewMenuOverlay.classList.remove('menu__input--wrap-active');
    frmNewMenuOverlay.classList.add('menu__input--wrap-close');
  });
}

// Delete Confirmation Overlay
const isActiveMenuAvail = document.querySelector('.active__data');
const deleteConfirmOverlay = document.querySelector('.delete__overlay--wrap');
if (isActiveMenuAvail) {
  const btnMenus = document.querySelectorAll('.menu__list--delete');
  btnMenus.forEach((btnMenu, i) => {
    btnMenu.addEventListener('click', (e) => {
      e.preventDefault();
      deleteConfirmOverlay.classList.add('delete__overlay--wrap-active');
      deleteConfirmOverlay.classList.remove('delete__overlay--wrap-close');
    });
  });
}

if (deleteConfirmOverlay) {
  const btnCancel = document.getElementById('btnDeleteOverlay');
  btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    deleteConfirmOverlay.classList.add('delete__overlay--wrap-close');
    deleteConfirmOverlay.classList.remove('delete__overlay--wrap-active');
  });
}

// Current Affair Overlay
const isAffairOverlayAvail = document.querySelector(
  '.overlay__affair--input-wrap'
);
const isBtnNewCurrentAvail = document.querySelector(
  '#overlay__affair--visible'
);
isBtnNewCurrentAvail.addEventListener('click', () => {
  console.log('clicked');
  isAffairOverlayAvail.classList.add('overlay__affair--visible');
});

if (isAffairOverlayAvail) {
  const btnCloseOverlay = document.querySelector('.overlay__btn-close');

  btnCloseOverlay.addEventListener('click', () => {
    isAffairOverlayAvail.classList.remove('overlay__affair--visible');
  });
}
