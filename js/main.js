
var btn = document.querySelector('.btn-recall');
var popup = document.querySelector('.modal-feedback');
var close = document.querySelector('.modal-content-close');

btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');

});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');

});
