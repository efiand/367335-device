var gulp = require('gulp');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

/* Локальный сервер */
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: '.'
    },
  })
})

/* Препроцессинг SCSS */
gulp.task('SCSS', function() {
  var scss = require('gulp-sass');
  return gulp.src('src/scss/**/*.scss')
  .pipe(scss())
  .pipe(gulp.dest('css'))
});

/* Форматирование CSS */
gulp.task('fmtCSS', function() {
  var stylefmt = require('gulp-stylefmt');
  return gulp.src('css/main.css')
  .pipe(stylefmt())
  .pipe(gulp.dest('css'))
});

/* Порядок в CSS */
gulp.task('cssComb', function() {
  var csscomb = require('gulp-csscomb');
  return gulp.src('css/main.css')
  .pipe(csscomb())
  .pipe(gulp.dest('css'))
});

/* Вендорные префиксы CSS */
gulp.task('autoprefixer', function () {
  var autoprefixer = require('gulp-autoprefixer');
  return gulp.src('css/main.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css'))
});

/* Минификация CSS */
gulp.task('minCSS', function() {
  var minCSS = require('gulp-clean-css');
  return gulp.src('css/main.css')
  .pipe(minCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('css'))
});

/* Все задачи CSS */
gulp.task('CSS', function(callback) {
  runSequence('SCSS', 'fmtCSS', 'autoprefixer', 'cssComb', 'minCSS', callback)
});

/* Оптимизация JS */
gulp.task('uglify', function() {
  var uglify = require('gulp-uglify');
  return gulp.src('js/main.js')
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('js'))
});

/* Оптимизация графики */
gulp.task('imgOptim', function() {
  var imagemin = require('gulp-imagemin');
  var jpegoptim = require('imagemin-jpegoptim');
  return gulp.src('src/img/**/*.+(jpg|png|svg)')
  .pipe(imagemin([
    imagemin.optipng(),
    imagemin.svgo({
      plugins: [
      {removeTitle: true},
      {cleanupNumericValues: false}
      ]
    }),
    jpegoptim({
      max: 90,
      progressive: true
    })
    ]))
  .pipe(gulp.dest('img'));
});

/* Отслеживание изменений (с перезагрузкой браузера) */
gulp.task('watch', ['browserSync', 'CSS', 'uglify'], function() {
  gulp.watch('**/*.html', browserSync.reload);
  gulp.watch('src/scss/**/*.scss', ['CSS', browserSync.reload]);
  gulp.watch('js/main.js', ['uglify', browserSync.reload]);
});

/* Сборка проекта */
gulp.task('default', function(callback) {
  runSequence('uglify', 'imgOptim', 'CSS', callback)
});
