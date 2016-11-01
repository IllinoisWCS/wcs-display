var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('bundle', function() {
    return browserify('./src/main.js')
    .transform('babelify', {presets: ['react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('.'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('sass', function() {
    return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass', 'bundle'], function (){
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('src/*.js', ['bundle']);
  // Other watchers
});

gulp.task('default', ['bundle', 'sass']);
