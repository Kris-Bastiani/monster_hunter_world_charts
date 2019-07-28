const gulp = require('gulp');

module.exports = () => {
	gulp.watch(['./src/assets/fonts/**/*'], ['fonts']);
	gulp.watch(['./src/assets/images/**/*'], ['images']);
	gulp.watch(['./src/**/*.pug'], ['pug']);
	gulp.watch(['./src/assets/css/**/*'], ['sass']);
	gulp.watch(['./src/assets/js/**/*'], ['webpack']);
};
