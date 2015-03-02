var dest      = "./build",
    src       = './src';

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var jshint       = require('gulp-jshint');
var stylish      = require('jshint-stylish');


// Static Server 
gulp.task('serve', function () {
  browserSync({
    server: src
  });
  gulp.watch([src + "/js/**/*.js"], ['js']);
  gulp.watch(src + "/*.html").on('change', reload);
});


// Lint JS first
gulp.task('js', ['jslint'], function () {
  return gulp.src([src + '/js/main.js'])
    .pipe(reload({stream: true}));
});

// JSlint
gulp.task('jslint', function () {
  return gulp.src([src + '/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


// Default: turn the server on and refresh/inject on change!
gulp.task('default', ['serve']);
