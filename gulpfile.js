//gulpfile.js
var gulp = require("gulp");
var babel = require("gulp-babel");
var jshint = require('gulp-jshint');

gulp.task("default", function () {
  return gulp.src("es6-event-delegator.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task("watch", function(){
    gulp.watch('es6-event-delegator.js', ['default'])
});