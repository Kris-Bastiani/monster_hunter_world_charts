const connect = require('gulp-connect');
const gulp = require('gulp');
const pump = require('pump');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const webpackStream = require('webpack-stream');

module.exports = (cb) => {
	pump([
		webpackStream(webpackConfig, webpack),
		gulp.dest('./dist'),
		connect.reload(),
	], cb);
};
