$(function () {
  let j = 1;
  $('#more_fields--1').click(function (e) {
    e.preventDefault();
    j++;

    $('.info__wrap--6').append(`<div class="info__wrap--4 desig__box">
      <input type="text" class="w-2" id="desig__name--${j}" autocomplete="off" placeholder="Post Name" value=""></>
      <input type="text" class="w-1" id="desig__gen--${j}" autocomplete="off" placeholder="gen"></>
      <input type="text" class="w-1" id="desig__st--${j}" autocomplete="off" placeholder="st"></>
      <input type="text" class="w-1" id="desig__sc--${j}" autocomplete="off" placeholder="sc"></>
      <input type="text" class="w-1" id="desig__obc--${j}" autocomplete="off" placeholder="obc"></>
      <input type="text" class="w-1" id="desig__ews--${j}" autocomplete="off" placeholder="ews"></>
      <input type="text" class="w-1" id="desig__total--${j}" autocomplete="off" placeholder="total"></>
      <input type="text" class="w-2" id="desig__qualification--${j}" autocomplete="off" placeholder="qualification"></></div>`);
  });
});

$(function () {
  let i = 1;
  $('#more_fields--2').click(function (e) {
    e.preventDefault();
    i++;

    $('.info__wrap--5').append(`<div class="info__wrap--4 cat__box">
      <input type="text" class="w-2" id="cat__name--${i}" autocomplete="off" placeholder="Category Name"></>
      <input type="text" class="w-1" id="cat__gen--${i}" autocomplete="off" placeholder="gen"></>
      <input type="text" class="w-1" id="cat__st--${i}" autocomplete="off" placeholder="st"></>
      <input type="text" class="w-1" id="cat__sc--${i}" autocomplete="off" placeholder="sc"></>
      <input type="text" class="w-1" id="cat__obc--${i}" autocomplete="off" placeholder="obc"></>
      <input type="text" class="w-1" id="cat__ews--${i}" autocomplete="off" placeholder="ews"></>
      <input type="text" class="w-1" id="cat__total--${i}" autocomplete="off" placeholder="total"></>
      <input type="text" class="w-2" id="cat__downloadlink--${i}" autocomplete="off" placeholder="Download Link" /></div>`);
  });
});

$(function () {
  let k = 1;
  $('#more__fields--3').click(function (e) {
    e.preventDefault();
    k++;

    $('.info__wrap--9').append(`<div class="info__wrap--4 link__box">
      <input type="text" class="w-33" id="link__title--${k}" autocomplete="off" placeholder="Link Title"></>
      <input type="text" class="w-33" id="link__head--${k}" autocomplete="off" placeholder="Link Head"></>
      <input type="text" class="w-33" id="link__link--${k}" autocomplete="off" placeholder="Link address"></>`);
  });
});
