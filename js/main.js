/** Карта */
var mapOnBtn = document.querySelector('.contacts__map-link');
var mapOffBtn = document.querySelector('.contacts__close--map');
var mapContainer = document.getElementById('map');

if (mapOnBtn) {
  mapOnBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapContainer.classList.add('map--js');
  });
}

if (mapOffBtn) {
  mapOffBtn.addEventListener('click', function(evt) {
    mapContainer.classList.remove('map--js');
  });
}


/** Форма обратной связи */
var feedbackOnBtn = document.querySelector('.info__link--feedback');
var feedbackOffBtn = document.querySelector('.contacts__close--feedback');
var feedbackContainer = document.getElementById('feedback');

if (feedbackOnBtn) {
  feedbackOnBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackContainer.classList.add('feedback--js');
  });
}

if (feedbackOffBtn) {
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
