const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', gulp.series( function() {
    return gulp.src(['sass/**/*.scss'])
    .pipe(sass({
        outputStyle: "compressed",
        })
        )
        .on("error",sass.logError)
         // converter o Sass em CSS
    .pipe(gulp.dest('css/'));
    
}));

gulp.task('watch', gulp.series( function() {
    gulp.watch(['sass/**/*.scss'], gulp.parallel( ['sass'] ));
}));

gulp.task('default', gulp.series( ['sass', 'watch'] ));