const connect = require('gulp-connect');
const gulp = require('gulp');
const pug = require('gulp-pug');
const pump = require('pump');

const locals = { $PTH_IMG: '/assets/images/' };

module.exports = (cb) => {
	pump([
		gulp.src('./src/**/[!_]*.pug'),
		pug({ locals }),
		gulp.dest('./dist'),
		connect.reload(),
	], cb);
};
