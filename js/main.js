/** Карта */
var mapOnBtn = document.querySelector('.contacts__map-link');
var mapOffBtn = document.querySelector('.contacts__close--map');
var mapContainer = document.getElementById('map');
mapOnBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapContainer.classList.add('map--js');
});
mapOffBtn.addEventListener('click', function(evt) {
  mapContainer.classList.remove('map--js');
});

/** Форма обратной связи */
var feedbackOnBtn = document.querySelector('.info__link--feedback');
var feedbackOffBtn = document.querySelector('.contacts__close--feedback');
var feedbackContainer = document.getElementById('feedback');
feedbackOnBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedbackContainer.classList.add('feedback--js');
});
feedbackOffBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedbackContainer.classList.remove('feedback--js');
});
