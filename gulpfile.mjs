import gulp from 'gulp';
import { deleteAsync } from 'del';

gulp.task('clean', function() {
  return deleteAsync(['assets/vendor/bootstrap']);
});

gulp.task('copy-bootstrap', function() {
  return gulp.src([
    'node_modules/bootstrap/dist/**/*'
  ])
  .pipe(gulp.dest('assets/vendor/bootstrap'));
});
gulp.task('copy-mdbootstrap', function() {
  return gulp.src([
    'node_modules/mdbootstrap/css/mdb.min.css',
    'node_modules/mdbootstrap/js/mdb.min.js'
  ])
  .pipe(gulp.dest('assets/vendor/mdbootstrap'));
});

gulp.task('default', gulp.series('clean', 'copy-bootstrap', 'copy-mdbootstrap'));