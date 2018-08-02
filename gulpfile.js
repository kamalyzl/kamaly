const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer')


gulp.task('pug', () => {
  gulp.src('./dev/view/views/*.pug')
    .pipe(pug({
      pretty: true
    })) // pipe coge los datos y los pasa por plugins
    .pipe(gulp.dest('./public')) // dest es la carpeta de destino
});

gulp.task('css', () => {
  gulp.src('./dev/sass/*.scss')
    .pipe(sass({
      outputStyle: 'compact',
      // sourceComments: true,
    }))
    .pipe(autoprefixer({
      versions:['last 2 browsers']
    }))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('js', () => {
  gulp.src('./dev/js/*.js')
    .pipe(babel({
      "presets": ["env"]
    }))
    // .pipe(init())
    // .pipe(concat('app.min.js'))
    // .pipe(write())
    .pipe(gulp.dest('public/js'))
});


gulp.task('default', () => {
  gulp.watch('./dev/sass/**/*.scss', ['css']);
  gulp.watch('./dev/view/**/*.pug', ['pug']);
  gulp.watch('./dev/js/**/*.js', ['js']);
});

