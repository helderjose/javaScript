var gulp              = require('gulp'),
    gulpPlugins       = require('gulp-load-plugins'),
    jeet              = require('jeet'),
    nib               = require('nib'),
    rupture           = require('rupture'),
    rsync             = require('rsyncwrapper'),
    browserSync       = require('browser-sync'),
    pngquant          = require('imagemin-pngquant'),
    imageminJpegtran  = require('imagemin-jpegtran'),
    reload            = browserSync.reload,
    $                 = gulpPlugins();

paths = {
  localAPP : 'localhost/menu-complete/app/menu-complete.html', // your webapp path
  markup   :
  [
    '../app/**/*.php',
    '../app/**/*.html'
  ],
  scripts  :
  [
    '../src/js/app.js',
    '../src/js/modules/**/*.js'
  ],
  vendors  : '../src/js/vendors/**/*',
  css      : '../src/stylus/**/*.styl',
  images   : '../src/img/',
  fonts    : '../src/fonts/',
  build    : '../app/'
};

gulp.task('markup', function () {
  return gulp.src( paths.markup )
    .pipe(reload({ stream: true }));
});

gulp.task('styl', function () {
  return gulp.src( '../src/stylus/app.styl' )
    .pipe($.plumber())
    .pipe($.stylus(
    {
      'include css': true,
      use:
      [
        jeet(),
        nib(),
        rupture()
      ]
    }))
    .pipe($.autoprefixer({ browsers:
      [
        'last 2 version',
        'safari 5',
        'ie 8',
        'ie 9',
        'ie 10',
        'ie 11',
        'opera 12.1',
        'ios 6',
        'android 4'
      ]}))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.minifyCss())
    .pipe($.size())
    .pipe(gulp.dest( paths.build + 'css' ))
    .pipe($.notify( 'CSS - Done' ))
    .pipe(reload({ stream: true }));
});

gulp.task('js', function () {
  return gulp.src( paths.scripts )
    .pipe($.plumber())
    .pipe($.concat( 'app.js' ))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.uglify())
    .pipe($.size())
    .pipe(gulp.dest( paths.build + 'js' ))
    .pipe($.notify( 'JS - Done' ))
    .pipe(reload({ stream: true }));
});

gulp.task('js-vendors', function () {
  return gulp.src(
    [
      paths.vendors + "jquery-1.11.3.js",
      paths.vendors + "jquery.easing.1.3.js",
      paths.vendors + "vivus.js",
      paths.vendors + "enquire.js",
      paths.vendors + "velocity.js"
      // paths.vendors + "jquery.embedly.js",
      // paths.vendors + "vunit.js",
      // paths.vendors + "slider.js",
      // paths.vendors + "numeral.min.js"
    ])
    .pipe($.uglify())
    .pipe($.concat("vendors.min.js"))
    .pipe($.size())
    .pipe(gulp.dest(paths.build + 'js'))
    .pipe($.notify( 'Vendors - Done' ))
    .pipe(reload({ stream: true }));
});

gulp.task('copy-image', function () {
  return gulp.src( paths.images + "/**/*.*" )
    .pipe($.changed( paths.build + 'img' ))
    .pipe(gulp.dest( paths.build + 'img' ))
    .pipe($.notify(
    {
      onLast: true,
      message: function (file) { return 'Copy images - Done'; }
    }))
    .pipe(reload({ stream: true }));
});

gulp.task('fonts', function () {
  return gulp.src(paths.fonts + "/*.*")
    .pipe($.plumber())
    .pipe(gulp.dest( paths.build + 'fonts' ))
    .pipe($.notify(
    {
      onLast: true,
      message: function(file) { return 'Copy Fonts - Done'; }
    }))
    .pipe(reload({ stream: true }));
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch(paths.markup,  ['markup']);
  gulp.watch(paths.css,     ['styl']);
  gulp.watch(paths.scripts, ['js']);
  gulp.watch(paths.fonts  + "/**/*",  ['fonts']);
  gulp.watch(paths.images + "/**/*",  ['copy-image']);
});

gulp.task('browser-sync', function () {
  browserSync.init(null,
  {
    proxy     : paths.localAPP,
    notify    : false,
    port      : 8080
  });
});

gulp.task('default', [ 'styl', 'copy-image', 'js-vendors', 'js', 'fonts', 'watch' ]);
