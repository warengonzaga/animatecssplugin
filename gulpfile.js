/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    jshint = require('gulp-jshint'),
    minify = require('gulp-minifier'),
    multiDest = require('gulp-multi-dest');
    
var destOptions = {
    mode: 0755
};

gulp.task('default', function() {
  gutil.log(gutil.colors.green('Starting...'))
  gutil.log(gutil.colors.green('Writen by Waren Gonzaga'))
  gulp.watch('source/*jade', ['jade'], gutil.log(
    gutil.colors.cyan('Watching index.jade file...'),
    gutil.colors.green('OK!')
    ))
  gulp.watch('source/sass/**/*.scss', ['sass'], gutil.log(
    gutil.colors.cyan('Watching sass files...'),
    gutil.colors.green('OK!')
    ))
  gulp.watch('source/javascript/**/*.js', ['jshint'], gutil.log(
    gutil.colors.cyan('Watching javascript files...'),
    gutil.colors.green('OK!')
    ))
  gutil.log(gutil.colors.cyan('Watching Changes...'))
});

gulp.task('jade', function() {
    gutil.log(gutil.colors.cyan('Compiling Jade file...'))
    gutil.log(gutil.colors.cyan('Updating HTML...'))
    gutil.log(gutil.colors.cyan('Status: '), gutil.colors.green('DONE!'))
    gulp.src('source/*.jade')
    .pipe(jade({
      pretty: true
    }))
  .pipe(gulp.dest('demo'))
})

gulp.task('sass', function() {
  gutil.log(gutil.colors.cyan('Compiling SCSS Files...'))
  gutil.log(gutil.colors.cyan('Updating CSS File'))
  gutil.log(gutil.colors.cyan('Status: '), gutil.colors.green('DONE!'))
  gulp.src('source/sass/**/*.scss')
  .pipe(sassLint())
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('demo/css'))
})

gulp.task('jshint', function() {
    gutil.log(gutil.colors.cyan('Updating JavaScript Files...'))
    gutil.log(gutil.colors.cyan('Status: '), gutil.colors.green('DONE!'))
    gulp.src('source/javascript/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(minify({
      minify: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyJS: true,
  })).pipe(multiDest(['build', 'demo/js'], destOptions));
})

gulp.task('production', function() {
  return gulp.src('source/javascript/**/*.js').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
  })).pipe(multiDest(['build', 'demo/js'], destOptions));
});