const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return src(['./src/**/*.scss', './src/**/*.css'])
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist'));
}

exports.default = series(compileSass);
