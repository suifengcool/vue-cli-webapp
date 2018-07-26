var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var through = require('through2');

// var replaceRem2Px = function () {
//   function fn(file, encoding, callback) {
//     if (file.isNull()) {
//       return callback(null, file);
//     }

//     if (file.isStream()) {
//       return callback(createError(file, 'Streaming not supported'));
//     }

//     let text = file.contents.toString();

//     if (/\d*\.?\d+rem/.test(text)) {
//       text = text.replace(/(\d*\.?\d+)rem/g, function (match, m1) {
//         return parseInt(m1 * 50) + 'px';
//       });
//     }

//     file.contents = new Buffer(text);
//     callback(null, file);
//   }

//   return through.obj(fn);
// };

gulp.task('css:base', function () {
  gulp.src('../src/styles/base.less')
    .pipe(require('gulp-less')())
    .pipe(cleanCss())
    .pipe(rename('xxb-ui.base.css'))
    .pipe(gulp.dest('../dist'));
});

// gulp.task('css:xxb-ui', function () {
//   gulp.src('../dist/xxb-ui.css')
//     .pipe(require('ydcss-rem2px')(50))
//     .pipe(cleanCss())
//     .pipe(rename('xxb-ui.css'))
//     .pipe(gulp.dest('../dist'));
// });

// gulp.task('js:xxb-ui', function () {
//   gulp.src('../dist/xxb-ui.js')
//     .pipe(replaceRem2Px())
//     .pipe(gulp.dest('../dist'));
// });

gulp.task('flexible', function () {
  gulp.src('../src/xxb-ui.flexible.js')
    .pipe(require('gulp-uglify')())
    .pipe(gulp.dest('../dist'));
});

// 在gulpfile.js中，所有操作的入口都是这个叫'default'的task
// 故要将自定义的task加入到default中
gulp.task('default', ['css:base', 'flexible']);
