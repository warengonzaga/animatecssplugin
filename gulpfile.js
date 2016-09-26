/* File: gulpfile.js */

/* Gulp Packages */
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    jshint = require('gulp-jshint'),
    minify = require('gulp-minifier'),
    multiDest = require('gulp-multi-dest'),
    rename = require('gulp-rename');
    
var destOptions = {
    mode: 0755
};

/**
 * Gulp Tasks
 * Writen by Waren Gonzaga
 */

gulp.task('default', ['init','jade','sass','jshint','build']);

gulp.task('init', function() {
    gutil.log(gutil.colors.green('AnimateCSSPlugin for GreenSock'));
    gutil.log(gutil.colors.green('Writen by Waren Gonzaga'));
});

gulp.task('dev', ['jade','sass','jshint','build'], function() {
  gulp.watch('source/*jade', ['jade'], gutil.log(
    gutil.colors.cyan('Watching index.jade file...'),
    gutil.colors.green('OK!')
    ));
  gulp.watch('source/sass/**/*.scss', ['sass'], gutil.log(
    gutil.colors.cyan('Watching sass files...'),
    gutil.colors.green('OK!')
    ));
  gulp.watch('source/javascript/**/*.js', ['jshint'], gutil.log(
    gutil.colors.cyan('Watching javascript files...'),
    gutil.colors.green('OK!')
    ));
  gutil.log(gutil.colors.cyan('Watching Changes...'));
});

gulp.task('jade', function() {
  gutil.log(gutil.colors.cyan('Compiling Jade file...'));
  gutil.log(gutil.colors.cyan('Updating HTML...'));
  gutil.log(gutil.colors.cyan('Status: '), gutil.colors.green('DONE!'));
  gutil.log(gutil.colors.cyan('Watching Changes...'));
  gulp.src('source/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('demo'));
});

gulp.task('sass', function() {
  gutil.log(gutil.colors.cyan('Compiling SCSS Files...'));
  gutil.log(gutil.colors.cyan('Updating CSS File'));
  gutil.log(gutil.colors.cyan('Status: '), gutil.colors.green('DONE!'));
  gutil.log(gutil.colors.cyan('Watching Changes...'));
  gulp.src('source/sass/**/*.scss')
  .pipe(sassLint())
  .pipe(sassLint.failOnError())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(rename('demo/css/style.min.css'))
  .pipe(gulp.dest(''));
});

gulp.task('jshint', function() {
  gutil.log(gutil.colors.cyan('Updating JavaScript Files...'));
  gutil.log(gutil.colors.cyan('Status: '), gutil.colors.green('DONE!'));
  gutil.log(gutil.colors.cyan('Watching Changes...'));
  
  /** Minified animateCSSplugin **/
  gulp.src('source/javascript/animateCSSPlugin.js')
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
  }))
  .pipe(rename('demo/js/animateCSSPlugin.min.js'))
  .pipe(gulp.dest(''));
    
  /** Minified Script **/  
  gulp.src('source/javascript/script.js')
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
  }))
  .pipe(rename('demo/js/script.min.js'))
  .pipe(gulp.dest(''));
});

gulp.task('build', function() {
  gutil.log(gutil.colors.cyan('Building and Updating your animateCSSplugin'));
  gutil.log(gutil.colors.cyan('By Waren Gonzaga...'));
  /** Minified build **/
  gulp.src('source/javascript/animateCSSPlugin.js')
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
  }))
  .pipe(rename('build/animateCSSPlugin.min.js'))
  .pipe(gulp.dest(''));
  gutil.log(gutil.colors.cyan('Minified:'), gutil.colors.green('DONE!!!'));
  
  /** Production build **/
  gulp.src('source/javascript/animateCSSPlugin.js')
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(multiDest(['build','demo/js'], destOptions));
  gutil.log(gutil.colors.cyan('Production:'), gutil.colors.green('DONE!!!'));
  
  gutil.log(gutil.colors.cyan('Status:'), gutil.colors.green('DONE!!!'));
});