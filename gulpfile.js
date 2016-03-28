var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-cssmin');
var rjs = require('gulp-requirejs');
var uglifyJs = require('gulp-uglify');

var cssFiles = {
	screen: [
		'js/vendor/bootstrap2/css/bootstrap.css',
		'js/vendor/bootstrap2/css/bootstrap-responsive.css',
		'js/vendor/angular-loading-bar/build/loading-bar.min.css',
		'js/vendor/jquery-prettyPhoto/css/prettyPhoto.css',
		'js/vendor/bootstrap-wysihtml5/dist/bootstrap-wysihtml5-0.0.2.css',
		'js/vendor/toastr/toastr.min.css',
		'styles/glyphicons.css',
		'styles/style.css',
		'styles/skin.less'
	],
	print: [
		'styles/print.css'
	]
};

gulp.task('uglifyJs', function () {
	rjs({
		baseUrl: "js/angular",
		name: "Home",
		mainConfigFile: "js/angular/Home.js",
		out: "home.min.js"
	})
	.pipe(uglifyJs())
	.pipe(gulp.dest('js/angular'));
});

gulp.task('minifyCSS', function () {
	gulp.src(cssFiles.screen)
		.pipe(concat('style.min.less'))
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(gulp.dest('styles'));

	gulp.src(cssFiles.print)
		.pipe(concat('print.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('styles'));
});

gulp.task('default', ['uglifyJs', 'minifyCSS']);
