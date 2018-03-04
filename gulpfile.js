// ================================================== VARIABLES

const NODE_ENV = process.env.NODE_ENV || 'development';

const gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
	imagemin = require('gulp-imagemin'),
	pug = require('gulp-pug'),
	pump = require('pump'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	through2 = require('through2'),
	uglify = require('gulp-uglify'),
	webpack = require('webpack-stream'),
	webpackConfig = require('./webpack.config.js');

const pug_locals = {
	$meta: {
		title: 'Title',
		desc: 'Description'
	}
};


// ================================================== COMPILE TASKS

gulp.task('fonts', cb => {
	pump([
		gulp.src('./src/assets/fonts/**/*'),
		gulp.dest('./dist/assets/fonts'),
		connect.reload()
	], cb);
});

gulp.task('images', cb => {
	pump([
		gulp.src('./src/assets/images/**/*'),
		imagemin(),
		gulp.dest('./dist/assets/images'),
		connect.reload()
	], cb);
});

gulp.task('pug', cb => {
	pump([
		gulp.src('./src/**/[!_]*.pug'),
		pug({
			locals: pug_locals
		}),
		gulp.dest('./dist'),
		connect.reload()
	], cb);
});

gulp.task('sass', cb => {
	pump([
		gulp.src('./src/assets/css/**/[!_]*.scss'),
		sass({
			outputStyle: 'compressed'
		}),
		autoprefixer({
			browsers: [
				'last 2 versions',
				'ie >= 9'
			],
			cascade: false
		}),
		rename({
			suffix: '.min',
			extname: '.css'
		}),
		gulp.dest('./dist/assets/css'),
		connect.reload()
	], cb);
});

// NOTE: It seems gulp src here, while required for this to work, does nothing as webpack's entry points are used.
gulp.task('webpack', cb => {
	pump([
		gulp.src('./src/assets/js/**/app.js'),
		webpack(webpackConfig),
		NODE_ENV === 'production' ? uglify({ mangle: false }) : through2.obj(),
		gulp.dest('./dist'),
		connect.reload()
	], cb);
});


// ================================================== PROCESS TASKS

gulp.task('connect', () => {
	connect.server({
		livereload: true,
		port: 3000,
		root: 'dist'
	});
});

gulp.task('build', [
	'fonts',
	'images',
	'pug',
	'sass',
	'webpack'
]);

gulp.task('watch', () => {
	gulp.watch(['./src/assets/fonts/**/*'], ['fonts']);
	gulp.watch(['./src/assets/images/**/*'], ['images']);
	gulp.watch(['./src/**/*.pug'], ['pug']);
	gulp.watch(['./src/assets/css/**/*'], ['sass']);
	gulp.watch(['./src/assets/js/**/*'], ['webpack']);
});

gulp.task('default', [
	'build',
	'watch',
	'connect'
]);
