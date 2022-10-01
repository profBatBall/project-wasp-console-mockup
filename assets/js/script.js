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
    e.preventDefault(); //preventing from submitting
    navBar.querySelector('.active').classList.remove('active');
    li.classList.add('active');

    const indicator = document.querySelector('.indicator');
    indicator.style.transform = `translateX(calc(${index * 90}px))`;
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
