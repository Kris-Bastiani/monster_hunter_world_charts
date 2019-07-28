const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const gulp = require('gulp');
const pump = require('pump');
const sass = require('gulp-sass');

module.exports = (cb) => {
	pump([
		gulp.src('./src/assets/css/**/[!_]*.scss'),
		sass({ outputStyle: 'compressed' }),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false,
		}),
		gulp.dest('./dist/assets/css'),
		connect.reload(),
	], cb);
};
