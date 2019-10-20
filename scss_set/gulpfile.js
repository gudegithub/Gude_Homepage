const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require('gulp-plumber');
 
gulp.task("default", function() {
    return (
        gulp
        .src("scss/style.scss")
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) 
        .pipe(gulp.dest("css"))
    );
}); 
 
gulp.task('test-watch', function () {
  return gulp.watch('scss/*.scss', function () {
    return (
      gulp
        .src("scss/style.scss")
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest("."))
    );
  });
});
