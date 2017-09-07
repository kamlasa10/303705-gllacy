
var btn = document.querySelector('.btn-recall');
var popup = document.querySelector('.modal-feedback');
var close = document.querySelector('.modal-content-close');
var user = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=email]')
var form = popup.querySelector('.feedback-form');
var overlay = document.querySelector('.overlay');
var storage = localStorage.getItem('user');

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
   console.log('Введите Имя и адрес электроной почты')
 } else {
   localStorage.setItem('user', user.value);
 }


});

