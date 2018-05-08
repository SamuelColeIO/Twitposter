var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var flatten = require('gulp-flatten');
var nodemon = require('gulp-nodemon');
var Server = require('karma').Server;
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-clean-css');

var jsAngularFiles = [
  'node_modules/angular/angular.js',
  'node_modules/angular-ui-router/release/angular-ui-router.js',
  'node_modules/angular-touch/angular-touch.js',
  'node_modules/match-media/matchMedia.js',
  'node_modules/ng-fittext/dist/ng-FitText.min.js',
  'node_modules/bluebird/js/browser/bluebird.min.js',
  'node_modules/moment/min/moment.min.js',
  'node_modules/angular-moment/angular-moment.min.js'
  ],
  jsMainFiles = [
    'src/app/root.component.js',
    'src/app/root.controller.js',
    'src/app/component/landing-page-component/landing-page-controller.js',
    'src/app/component/landing-page-component/landing-page-component.js',
    'src/app/component/create-page-component/create-page-controller.js',
    'src/app/component/create-page-component/create-page-component.js',
    'src/app/component/contact-page-component/contact-page-controller.js',
    'src/app/component/contact-page-component/contact-page-component.js',
    'src/app/component/order-tracking-page-component/order-tracking-page-controller.js',
    'src/app/component/order-tracking-page-component/order-tracking-page-component.js',
    'src/app/component/confirmation-page-component/confirmation-page-controller.js',
    'src/app/component/confirmation-page-component/confirmation-page-component.js',
    'src/app/component/terms-and-conditions-page-component/terms-and-conditions-page-component.js',
    'src/app/component/privacy-policy-page-component/privacy-policy-page-component.js',
    'src/app/component/logo-subheading-component/logo-subheading-component.js',
    'src/app/component/logo-subheading-component/logo-subheading-controller.js',
    'src/app/component/url-input-component/url-input-component.js',
    'src/app/component/url-input-component/url-input-controller.js',
    'src/app/component/popular-container-component/popular-container-component.js',
    'src/app/component/popular-container-component/popular-container-controller.js',
    'src/app/component/footer-component/footer-component.js',
    'src/app/component/social-media-component/social-media-component.js',
    'src/app/component/wall-poster-component/wall-poster-component.js',
    'src/app/component/poster-component/poster-component.js',
    'src/app/component/large-poster-component/large-poster-controller.js',
    'src/app/component/large-poster-component/large-poster-component.js',
    'src/app/directives/swipe-directive.js',
    'src/app/directives/tweet-text-size-directive.js',
    'src/app/services/poster.service.js',
    'src/app/services/order.service.js',
    'src/app/services/tracking.service.js',
    'src/app/services/mail.service.js',
    'src/app/filters/sce.filter.js',

    'src/app/component/poster-test-page-component/poster-test-page-component.js',
    'src/app/component/poster-test-page-component/poster-test-page-controller.js',
    ],
jsDest = 'build/app/js';

gulp.task('sass', function () {
  return gulp.src('src/app/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .on('error', swallowError)
    .pipe(flatten())
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('build/app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('html', function () {
  return gulp.src('build/app/')
    .on('error', swallowError)
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function () {
  return gulp.src('build/app/js/main.min.js')
    .on('error', swallowError)
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('png', function () {
  gulp.src("src/app/images/**.png")
    .pipe(gulp.dest('build/app/images'));
});

gulp.task('ttf', function () {
  gulp.src("src/app/scss/**.ttf")
    .pipe(gulp.dest('build/app/css'));
});


gulp.task('woff', function () {
  gulp.src("src/app/scss/**.woff")
    .pipe(gulp.dest('build/app/css'));
});

gulp.task('eot', function () {
  gulp.src("src/app/scss/**.eot")
    .pipe(gulp.dest('build/app/css'));
});

gulp.task('angularScripts', function() {
  return gulp.src(jsAngularFiles)
      .pipe(concat('angular-twitposter.min.js'))
      .pipe(uglify({mangle: false}))
      .pipe(gulp.dest(jsDest));
});

gulp.task('mainScripts', function() {
  return gulp.src(jsMainFiles)
      .pipe(concat('main.min.js'))
      .pipe(uglify({mangle: false}))
      .pipe(gulp.dest(jsDest));
});


gulp.task('watch', ['browserSync', 'sass', 'html', 'png', 'ttf', 'woff', 'eot'], function () {
  gulp.watch('src/app/**/*.scss', ['build', 'sass']),
  gulp.watch('src/app/**/*.html', ['build', 'html']),
  gulp.watch('src/app/**/*.pug', ['build', 'html']),
  gulp.watch('src/app/**/*.js', ['build', 'js']),
  gulp.watch('src/app/images/*.png', ['build', 'png']);
  gulp.watch('src/app/scss/*.ttf', ['build', 'ttf']);
  gulp.watch('src/app/scss/*.woff', ['build', 'woff']);
  gulp.watch('src/app/scss/*.eot', ['build', 'eot']);
})

gulp.task('karmaWatch', ['browserSync', 'sass', 'html', 'png', 'ttf', 'woff', 'eot', 'karma'], function () {
  gulp.watch('src/app/**/*.scss', ['build', 'sass']),
  gulp.watch('src/app/**/*.html', ['build', 'html']),
  gulp.watch('src/app/**/*.js', ['build', 'js']),
  gulp.watch('src/app/images/*.png', ['build', 'png']);
  gulp.watch('src/app/scss/*.ttf', ['build', 'ttf']);
  gulp.watch('src/app/scss/*.woff', ['build', 'woff']);
  gulp.watch('src/app/scss/*.eot', ['build', 'eot']);
  gulp.watch('src/app/**/*.spec.js', ['build', 'karma']);
})


gulp.task('browserSync', ['nodemon'], function () {
  setTimeout(function () {
    browserSync.init({
      proxy: "http://localhost:4444", // port of node server,
      port: 7000
    })
  }, 1000);
})

gulp.task('nodemon', function (cb) {
  var started = false;

  return nodemon({
    script: 'start.js'
  }).on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task('build', ['mainScripts', 'angularScripts', 'sass', 'html', 'png', 'ttf', 'woff', 'eot'], function () {
  return gulp.src(['src/app/**/*.html', 'src/app/**/*.pug'])
    .pipe(useref())
    .pipe(gulp.dest('build/app'))
});

gulp.task('karma', function (done) {
  new Server({
    configFile: require('path').resolve('karma.conf.js'),
    singleRun: true
  }, done).start();
});

function swallowError(error) {
  // If you want details of the error in the console
  console.log(error.toString())
  this.emit('end')
}

gulp.task('default', ['watch']);

gulp.task('test', ['karmaWatch']);