var batch = require('gulp-batch');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var html = ['html/index.html'];
var css = ['css/master.scss'];
var js = ['js/init.js'];
var images = ['./images/**/*'];
var buildTasks = ['html', 'sass', 'js', 'images'];

gulp.task('build', buildTasks);

gulp.task('html', function() {
    return gulp.src(html)
        .pipe(gulp.dest('static/'))
});

gulp.task('sass', function() {
    return gulp.src(css)
        .pipe(sass())
        .pipe(gulp.dest('static/css'))
});

gulp.task('js', function() {
    return gulp.src(js)
        .pipe(concat('init.min.js'))
        .pipe(browserify({
            insertGlobals : true,
            debug : true
        }))
        //.pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('static/js'))
});

gulp.task('images', function() {
    return gulp.src(images)
        .pipe(gulp.dest('static/images'))
});

gulp.task('watch', function () {
    watch('html/**/*.html', batch(function (events, done) {
        gulp.start('html', done);
    }));
    watch(['app.js', 'js/**/*.js'], batch(function (events, done) {
        gulp.start('js', done);
    }));
    watch('css/**/*.scss', batch(function (events, done) {
        gulp.start('sass', done);
    }));
});
