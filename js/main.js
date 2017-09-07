
var btn = document.querySelector('.btn-recall');
var popup = document.querySelector('.modal-feedback');
var close = document.querySelector('.modal-content-close');
var user = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=email]')
var form = popup.querySelector('.feedback-form');
var overlay = document.querySelector('.overlay');
var storage = localStorage.getItem('user');

//map
ymaps.ready(init);
function init () {
  var myMap = new ymaps.Map("map", {
    center:[55.752161956105276,37.61949517968746],
    zoom: 9,
    controls: []
  });

  var myGeoObjects = [];

  myGeoObjects = new ymaps.Placemark([55.800151390638646,37.61400201562497],{
  },{
    iconLayout: 'default#image',
    // Путь до нашей картинки
    iconImageHref: 'img/pin.svg',
    // Размер по ширине и высоте
    iconImageSize: [80, 140],
    iconImageOffset: [-35, -35]
  });

  var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  // Отлючаем возможность изменения масштаба
  myMap.behaviors.disable('scrollZoom');

}

  btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  overlay.classList.add('overlay-show');
  if (storage) {
    user.value = storage;
    email.focus();
  }
  else {
    user.focus();
  }

});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      overlay.classList.remove('overlay-show');
    }
  }
});

form.addEventListener('submit', function (evt) {
 if (!user.value || !email.value ) {
   evt.preventDefault();
 } else {
   localStorage.setItem('user', user.value);
 }

});

