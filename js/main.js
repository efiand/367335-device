/** Интерактивная карта */
var mapContainer = document.querySelector('.map');

if (mapContainer) {
  var mapOnBtn = document.querySelector('.contacts__map-link');
  var mapOffBtn = document.querySelector('.contacts__close--map');

  mapOnBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapContainer.classList.add('map--js');
  });

  mapOffBtn.addEventListener('click', function(evt) {
    mapContainer.classList.remove('map--js');
  });

  /** Оживление карты */
  function initMap() {
    var map = new google.maps.Map(document.querySelector('.map__canvas'), {
      center: {lat: 55.68703, lng: 37.52959},
      zoom: 17,
      disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
      position: {lat: 55.687, lng: 37.53022},
      map: map,
      icon: location.href.replace('location.hash', '').replace('#', '').replace('index.html', '') + 'img/icons/map-marker.svg'
    });
  }
}


/** Форма обратной связи */
var feedbackContainer = document.getElementById('feedback');

if (feedbackContainer) {
  var feedbackOnBtn = document.querySelector('.info__link--feedback');
  var feedbackOffBtn = document.querySelector('.contacts__close--feedback');

  feedbackOnBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackContainer.classList.add('feedback--js');
  });

  feedbackOffBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackContainer.classList.remove('feedback--js');
  });
}


/** Фиксация выпадающего меню по кнопке */
var menuOnBtn = document.querySelector('.nav__spoiler-btn--on');
var menuOffBtn = document.querySelector('.nav__spoiler-btn--off');
var menuBlock = document.querySelector('.categories-cat');

menuOnBtn.removeAttribute('disabled');

menuOnBtn.addEventListener('click', function() {
  if (!menuBlock.classList.contains('categories-cat--js')) {
    menuBlock.classList.add('categories-cat--js');
  }
  if (!menuOnBtn.classList.contains('nav__spoiler-btn--on-js')) {
    menuOnBtn.classList.add('nav__spoiler-btn--on-js');
  }
  if (!menuOffBtn.classList.contains('nav__spoiler-btn--off-js')) {
    menuOffBtn.classList.add('nav__spoiler-btn--off-js');
  }
});

menuOffBtn.addEventListener('click', function() {
  if (menuBlock.classList.contains('categories-cat--js')) {
    menuBlock.classList.remove('categories-cat--js');
  }
  if (menuOnBtn.classList.contains('nav__spoiler-btn--on-js')) {
    menuOnBtn.classList.remove('nav__spoiler-btn--on-js');
  }
  if (menuOffBtn.classList.contains('nav__spoiler-btn--off-js')) {
    menuOffBtn.classList.remove('nav__spoiler-btn--off-js');
  }
});


/** Оживление слайдера */
var minField = document.querySelector('.choose-cost__field--min');

if (minField) {
  var maxField = document.querySelector('.choose-cost__field--max');
  var minPoint = document.querySelector('.choose-cost__point--min');
  var maxPoint = document.querySelector('.choose-cost__point--max');
  var range = document.querySelector('.choose-cost__range');

  minField.addEventListener('change', function() {
    rangeSlider(minField, minPoint);
  });

  maxField.addEventListener('change', function() {
    rangeSlider(maxField, maxPoint);
  });

  function rangeSlider(field, point) {
    var valueLeft = field.value / 44 - 5;
    var valueLeftAlt = minPoint.style.left.replace('px', '');
    if (field == minField) {
      valueLeftAlt = maxPoint.style.left.replace('px', '');
    }
    point.style.left = valueLeft + 'px';
    var leftRange = valueLeft;
    var rightRange = valueLeftAlt;
    if (valueLeft > valueLeftAlt) {
      leftRange = valueLeftAlt;
      rightRange = valueLeft;
    }
    range.style.left = leftRange + 'px';
    range.style.right = (201 - rightRange) + 'px';
  }
}
