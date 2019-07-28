const connect = require('gulp-connect');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pump = require('pump');

module.exports = (cb) => {
	pump([
		gulp.src('./src/assets/images/**/*'),
		imagemin(),
		gulp.dest('./dist/assets/images'),
		connect.reload(),
	], cb);
};
