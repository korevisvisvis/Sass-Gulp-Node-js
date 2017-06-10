var gulp = require ('gulp');
var sass = require  ('gulp-sass');
var browser = require ('browser-sync');
var reload = browserSync.reload;

gulp.task ('sass', function () {
	gulp.src('scss/app.scss')
	.pipe(sass ({
		includedPaths: ['scss']
	}))
	.pipe(gulp.dest('app/css'));
});

gulp.task ('serve', [])

gulp.task ('default', ['sass']);