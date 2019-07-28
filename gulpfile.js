const gulp = require('gulp');

gulp.task('build', require('./lib/tasks/build'));
gulp.task('clean', require('./lib/tasks/clean'));
gulp.task('connect', require('./lib/tasks/connect'));
gulp.task('fonts', require('./lib/tasks/fonts'));
gulp.task('images', require('./lib/tasks/images'));
gulp.task('pug', require('./lib/tasks/pug'));
gulp.task('sass', require('./lib/tasks/sass'));
gulp.task('watch', require('./lib/tasks/watch'));
gulp.task('webpack', require('./lib/tasks/webpack'));

gulp.task('transpile', [
	'fonts',
	'images',
	'pug',
	'sass',
	'webpack',
]);

gulp.task('default', [
	'build',
	'watch',
	'connect',
]);
