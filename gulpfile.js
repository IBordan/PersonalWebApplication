var gulp       = require('gulp'),
  uglify     = require('gulp-uglify'),
  rename     = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');


gulp.task('Минификатор_JS', function () {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('Минификатор_HTML', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/content/'));
});

var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('Автопрефиксер_CSS', function () {
  return gulp.src('src/stylesheets/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('src/stylesheets/css/'));
});

var imagemin = require('gulp-imagemin');

gulp.task('Минификатор_изображений', function() {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/img/'));
});

var htmlhint = require("gulp-htmlhint");

gulp.task('Валидатор_HTML', function() {
  return gulp.src("src/content/*.html")
    .pipe(htmlhint());
});

var cssmin = require('gulp-cssmin');

gulp.task('Минификатор_CSS', function () {
    gulp.src('src/stylesheets/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/stylesheets/css/'));
});
