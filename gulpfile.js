'use strict';

let browserSync = require('browser-sync').create();
let path = require('path');
let del = require('del');
let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let clean = require('gulp-clean');
var browserify = require('browserify');
let cache = require('gulp-cache');
let csso = require('gulp-csso');
// let cssBase64 = require('gulp-css-base64');
let imagemin = require('gulp-imagemin');
let inlinesource = require('gulp-inline-source');
let notify = require('gulp-notify');
// let sass = require('gulp-sass');
// let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');
// let runSequence = require('run-sequence');
let rename = require('gulp-rename');
let htmlmin = require('gulp-htmlmin');
// let source = require('vinyl-source-stream');
let streamify = require('gulp-streamify')


// Gulp Clean Up
gulp.task('clean', () => {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

// Compile SCSS
gulp.task('css', () => {
  gulp.src('./css/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css/'))
    // .pipe(browserSync.stream())
    .pipe(rename('style.min.css'))
    .pipe(csso({
      restructure: false,
      // sourceMap: true,
      debug: false
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(notify({
      message: "CSS Successfully Minified",
      onLast: true
    }));
});

// Babelify and Minify JS
gulp.task('js', () => {
  return gulp.src('./js/itotem.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
  .pipe(rename('itotem.min.js'))
  .pipe(gulp.dest('dist/js/'))
});

// Minify HTML
gulp.task('html', () => (
  gulp.src('./**/*.html')
  // .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./dist/'))
));

// Minify Images
gulp.task('imagemin', () => {
  return gulp.src('./images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that run through imagemin
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('./dist/image/'));
});

// BrowserSync (Live Reload)
gulp.task('serve', () => {
  
  browserSync.init({
    // files: ['./dist/**'],
    files: ['./**'],
    server: {
      baseDir: "./dist/"
    }
  });
  gulp.watch('./css/**/*', ['sass']);
  gulp.watch('./**/*.html', ['html']);
  gulp.watch('.js/**/*.js', ['js']);
  gulp.watch('./images/**/*.+(png|jpg|jpeg|gif|svg)', ['imagemin']);
});

// Gulp Inline Source
// Embed scripts, CSS or images inline (make sure to add an inline attribute to the linked files)
// Eg: <script src="default.js" inline></script>
// Will compile all inline within the html file (less http requests - woot!)
gulp.task('inlinesource', () => {
  return gulp.src('./src/**/*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['css', 'imagemin', 'js', 'html']);
