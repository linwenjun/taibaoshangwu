var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    less = require('gulp-less');

gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('less', function() {
    gulp.src('src/main.less')
        .pipe(less())
        .pipe(gulp.dest('./'));
})

gulp.task('jade', function() {
    gulp.src('src/index.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'));
})

gulp.task('watch', function () {
    gulp.watch(['index.html'], ['html']);
});

gulp.task('watch-less', function() {
    gulp.watch(['src/main.less'], ['less']);
})

gulp.task('watch-jade', function() {
    gulp.watch(['src/index.jade'], ['jade']);
})


gulp.task('default', ['connect', 'watch', 'watch-jade', 'watch-less']);
