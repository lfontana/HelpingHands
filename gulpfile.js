var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('js', function () {
  return gulp.src('js/*.js')
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
})

gulp.task('html', function () {
  return gulp.src('*.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watchout', function () {
  gulp.watch('sass/*.scss', ['sass'])
  gulp.watch('js/*js', ['js'])
  gulp.watch('*.html', ['html'])
})

gulp.task('default', ['html', 'sass','js', 'watchout'])
