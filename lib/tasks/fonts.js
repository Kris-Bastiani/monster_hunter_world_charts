const connect = require('gulp-connect');
const gulp = require('gulp');
const pump = require('pump');

module.exports = (cb) => {
	pump([
		gulp.src('./src/assets/fonts/**/*'),
		gulp.dest('./dist/assets/fonts'),
		connect.reload(),
	], cb);
};
