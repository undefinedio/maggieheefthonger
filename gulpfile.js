//imports
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var minifyCSS = require("gulp-minify-css");
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {

	gulp.src('src/sass/main.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('css/'))
		.pipe(sourcemaps.init())
			.pipe(minifyCSS({}))
		.pipe(sourcemaps.write())
		.pipe(rename("main.min.css"))
		.pipe(gulp.dest('css/'))
		.pipe(livereload());

});

gulp.task('js', function () {
    gulp.src('src/js/main.js')
        .pipe(gulp.dest('js/'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest('js/'))
        .pipe(livereload());
    gulp.src('src/js/main2.js')
        .pipe(gulp.dest('js/'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename("main2.min.js"))
        .pipe(gulp.dest('js/'))
        .pipe(livereload());
});

gulp.task('default', function () {
	livereload.listen();
	gulp.watch('**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('index.html').on('change', livereload.changed);
});
