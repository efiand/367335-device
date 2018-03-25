/** Интерактивная карта */
var mapContainer = document.querySelector('.map');

if (mapContainer) {
  var mapOnBtn = document.querySelector('.contacts__map-link');
  var mapOffBtn = document.querySelector('.contacts__close--map');
  var mapCanvas = document.getElementById('map');

  mapOnBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapContainer.classList.add('map--js');
  });

  mapOffBtn.addEventListener('click', function(evt) {
    mapContainer.classList.remove('map--js');
  });

  mapCanvas.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (mapContainer.classList.contains('map--js')) {
        mapContainer.classList.remove('map--js');
      }
    }
  });

  /** Оживление карты */
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map('map', {
      center: [55.68703, 37.52959],
      zoom: 17,
      controls: []
    });
    myMap.geoObjects.add(new ymaps.Placemark([55.687, 37.53022], {
      hintContent: 'улица Строителей, 15'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/map-marker.svg',
      iconShadow: false,
      iconImageSize: [142, 46],
      iconImageOffset: [-71, -46]
    }));
    myMap.behaviors.disable('scrollZoom');
  }
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


/** Прогрессивное улучшение формы поиска */
var searchForm = document.querySelector('.search');
var searchField = document.querySelector('.search__field');

searchForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  searchField.value = searchField.value.trim();
  if (searchField.classList.contains('search__field--js')) {
    searchField.classList.remove('search__field--js');
  }
  if (searchField.value) {
    searchForm.submit();
  }
  else {
    searchField.classList.add('search__field--js');
  }
});


/** Прогрессивное улучшение формы обратной связи */
var feedbackForm = document.getElementById('feedback');

if (feedbackForm) {
  var feedbackOnBtn = document.querySelector('.info__link--feedback');
  var feedbackOffBtn = document.querySelector('.contacts__close--feedback');
  var feedbackName = document.getElementById('name');
  var feedbackMail = document.getElementById('email');
  var feedbackText = document.getElementById('text');

  feedbackOnBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackForm.classList.add('feedback--js');
    feedbackName.value = localStorage.getItem('name');
    feedbackMail.value = localStorage.getItem('email');
    feedbackText.value = localStorage.getItem('text');
    if (!feedbackName.value) {
      feedbackName.focus();
    }
    else if (!feedbackMail.value) {
      feedbackMail.focus();
    }
    else {
      feedbackText.focus();
    }
  });

  feedbackName.addEventListener('blur', function(evt) {
    if (feedbackName.classList.contains('feedback__field--js')) {
      feedbackName.classList.remove('feedback__field--js');
    }
    feedbackName.value = feedbackName.value.trim();

    var namePattern = /[А-Я]{1}[а-я]+ [А-Я]{1}[а-я]+/;
    if (!namePattern.test(feedbackName.value)) {
      feedbackName.classList.add('feedback__field--js');
      feedbackName.value = '';
      feedbackName.focus();
    }
    else {
      localStorage.setItem('name', feedbackName.value);
    }
  });

  feedbackMail.addEventListener('blur', function(evt) {
    if (feedbackMail.classList.contains('feedback__field--js')) {
      feedbackMail.classList.remove('feedback__field--js');
    }
    feedbackMail.value = feedbackMail.value.trim();

    var mailPattern = /.+@.+\..+/i;
    if (!mailPattern.test(feedbackMail.value)) {
      feedbackMail.classList.add('feedback__field--js');
      feedbackMail.value = '';
      feedbackMail.focus();
    }
    else {
      localStorage.setItem('email', feedbackMail.value);
    }
  });

  feedbackText.addEventListener('blur', function(evt) {
    if (feedbackText.classList.contains('feedback__field--js')) {
      feedbackText.classList.remove('feedback__field--js');
    }
    feedbackText.value = feedbackText.value.trim();
    if (!feedbackText.value) {
      feedbackText.classList.add('feedback__field--js');
      feedbackText.value = '';
      feedbackText.focus();
    }
    else {
      localStorage.setItem('text', feedbackText.value);
    }
  });

  feedbackForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    feedbackForm.classList.remove('feedback--js')
    feedbackForm.submit();
  });

  feedbackForm.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (feedbackForm.classList.contains('feedback--js')) {
        feedbackForm.classList.remove('feedback--js');
      }
    }
  });

  feedbackOffBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackForm.classList.remove('feedback--js');
  });
}
