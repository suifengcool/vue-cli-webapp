var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('css:base', function () {
  gulp.src('../src/styles/base.less')
    .pipe(require('gulp-less')())
    .pipe(cleanCss())
    .pipe(rename('xxb-ui.base.css'))
    .pipe(gulp.dest('../dist'));
});

gulp.task('css:xxb-ui', function () {
  gulp.src('../dist/xxb-ui.rem.css')
    .pipe(require('ydcss-rem2px')(50))
    .pipe(cleanCss())
    .pipe(rename('xxb-ui.px.css'))
    .pipe(gulp.dest('../dist'));
});

gulp.task('js:ydui', function () {
  gulp.src('../dist/xxb-ui.rem.js')
    .pipe(replaceRem2Px())
    .pipe(rename('xxb-ui.px.js'))
    .pipe(gulp.dest('../dist'));
});

gulp.task('flexible', function () {
  gulp.src('../src/xxb-ui.flexible.js')
    .pipe(require('gulp-uglify')())
    .pipe(gulp.dest('../dist'));
});

gulp.task('default', ['css:base', 'css:xxb-ui', 'flexible']);
