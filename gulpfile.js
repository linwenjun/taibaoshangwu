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
    gulp.src('main.less')
        .pipe(less())
        .pipe(gulp.dest('./'));
})

gulp.task('jade', function() {
    gulp.src('index.jade')
        .pipe(jade())
        .pipe(gulp.dest('./'));
})

gulp.task('watch', function () {
    gulp.watch(['index.html', 'main.css'], ['html']);
});

gulp.task('watch-less', function() {
    gulp.watch(['main.less'], ['less']);
})

gulp.task('watch-jade', function() {
    gulp.watch(['index.jade'], ['jade']);
})


gulp.task('default', ['connect', 'watch', 'watch-jade', 'watch-less']);
