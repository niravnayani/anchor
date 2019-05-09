var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('watch', function() {
  gulp.watch('./styles/*.scss', ['sass']);
});