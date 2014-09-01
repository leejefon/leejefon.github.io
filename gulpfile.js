var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-cssmin');
var rjs = require('gulp-requirejs');
var uglifyJs = require('gulp-uglify');

var paths = {
	target: '.tmp/public',
	assets: [
		'assets/**',
		'!assets/js/angular/**/*.js',
		'!assets/styles/*.css',
		'!assets/styles/*.less'
	],
	assetsToWatch: [
		'assets/**',
		'!assets/js/vendor/**'
	]
};

var cssFiles = {
	screen: [
		'assets/js/vendor/bootstrap2/css/bootstrap.css',
		'assets/js/vendor/bootstrap2/css/bootstrap-responsive.css',
		'assets/js/vendor/angular-loading-bar/build/loading-bar.min.css',
		'assets/js/vendor/jquery-prettyPhoto/css/prettyPhoto.css',
		'assets/js/vendor/bootstrap-wysihtml5/dist/bootstrap-wysihtml5-0.0.2.css',
		'assets/js/vendor/toastr/toastr.min.css',
		'assets/styles/glyphicons.css',
		'assets/styles/style.css',
		'assets/styles/skin.less'
	],
	print: [
		'assets/styles/print.css'
	]
};

gulp.task('uglifyJs', function () {
	rjs({
		baseUrl: "assets/js/angular",
		name: "Home",
		mainConfigFile: "assets/js/angular/Home.js",
		out: "home.min.js"
	})
	// .pipe(uglifyJs())
	.pipe(gulp.dest(paths.target + '/js/angular'));
});

gulp.task('minifyCSS', function () {
	gulp.src(cssFiles.screen)
		.pipe(concat('style.min.less'))
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(gulp.dest(paths.target + '/styles'));

	gulp.src(cssFiles.print)
		.pipe(concat('print.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(paths.target + '/styles'));
});

gulp.task('compileAssets', function () {
	gulp.src(paths.assets)
		.pipe(gulp.dest(paths.target));
});

gulp.task('watch', function () {
	gulp.watch(paths.assetsToWatch, ['uglifyJs', 'minifyCSS', 'compileAssets']);
});

gulp.task('default', ['uglifyJs', 'minifyCSS', 'compileAssets', 'watch']);
