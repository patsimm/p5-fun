var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var nodemon = require('gulp-nodemon')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var ts = require('gulp-typescript')
var tsify = require('tsify')

var paths = {
  pages: ['public/*.html'],
  clientOutFiles: ['dist/www/**/*.*'],
  clientOutFolder: 'dist/www',
  serverMainOutFile: 'dist/server.js',
  serverOutFiles: ['dist/*.js'],
  serverOutFolder: 'dist',
  serverSourceFiles: ['src/server.ts'],
  clientSourceFiles: ['src/client/**/*.ts'],
  jadeSourceFiles: ['src/views/*.jade'],
  jadeDist: 'dist/views',
  sourceFolder: 'src'
}

var tsProject = ts.createProject('tsconfig.json')

gulp.task('copy-html', function() {
  return gulp.src(paths.pages).pipe(gulp.dest(paths.clientOutFolder))
})

gulp.task('copy-jade', function() {
  return gulp.src(paths.jadeSourceFiles).pipe(gulp.dest(paths.jadeDist))
})

gulp.task('server-typescript', function() {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(paths.serverOutFolder))
})

gulp.task('client-typescript', function() {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/client/main.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.clientOutFolder))
})

gulp.task('build', [
  'copy-html',
  'copy-jade',
  'server-typescript',
  'client-typescript'
])

gulp.task('nodemon', ['build'], function() {
  nodemon({
    script: paths.serverMainOutFile,
    watch: paths.serverOutFiles,
    ext: 'js'
  })
})

gulp.task('watch', function() {
  gulp.watch(paths.pages, ['copy-html'])
  gulp.watch(paths.jadeSourceFiles, ['copy-jade'])
  gulp.watch(paths.serverSourceFiles, ['server-typescript'])
  gulp.watch(paths.clientSourceFiles, ['client-typescript'])
  gulp.watch(paths.clientOutFiles).on('change', browserSync.reload)
})

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init({
    proxy: 'http://localhost:5000',
    files: paths.clientOutFiles,
    browser: 'firefox',
    port: 8080
  })
})

gulp.task('develop', ['browser-sync', 'watch'])

gulp.task('default', ['develop'])
