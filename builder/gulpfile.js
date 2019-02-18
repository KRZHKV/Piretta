var gulp = require('gulp');
var scss = require('gulp-scss');

gulp.task('scss', function() {
    return gulp.src('css/style.scss')
    .pipe(scss())
    .pipe(gulp.dest('css/style'))
});