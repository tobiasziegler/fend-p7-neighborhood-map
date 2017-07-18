var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var ngrok = require('ngrok');
var port = 3000;
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

// Uglify the JS files
gulp.task('js', function() {
	return gulp.src('src/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

// Minify the CSS files
gulp.task('css', function() {
	return gulp.src('src/**/*.css')
	.pipe(cssnano())
	.pipe(gulp.dest('dist'));
});

// Minify the HTML
gulp.task('html', function() {
	return gulp.src('src/**/*.html')
	.pipe(htmlmin({
		collapseWhitespace: true
	}))
	.pipe(gulp.dest('dist'));
});

// Delete the build directory and its contents
gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('build', function() {
	runSequence(
		'clean',
		['css', 'js'],
		'html'
	);
});

gulp.task('serve', function() {
	// Open the site on a local server using Browsersync
	browserSync.init({
		server: {
			baseDir: 'dist',
			port: port
		}
	},
	// Get a URL that external connections and PageSpeed Insights can access
	function(err, browserSync) {
		return ngrok.connect(
			port,
			function(err, url) {
				console.log(' ----------------------------------');
				console.log('ngrok URL: ' + url);
				console.log(' ----------------------------------');
			}
		);
	});
});

gulp.task('serve:src', function() {
	// Open the development version of the site on a local server using
	// Browsersync - useful for debugging with unminified code.
	browserSync.init({
		server: {
			baseDir: 'src',
			port: port
		}
	},
	// Get a URL that external connections and PageSpeed Insights can access
	function(err, browserSync) {
		return ngrok.connect(
			port,
			function(err, url) {
				console.log(' ----------------------------------');
				console.log('ngrok URL: ' + url);
				console.log(' ----------------------------------');
			}
		);
	});
});
