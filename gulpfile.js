const {src, dest, watch, series} = require('gulp');
const postCss = require('gulp-postcss');
const cssNano = require('cssnano');
const compileSass = require('gulp-sass')(require('sass'));

function bundleSass() {
    return src('./public/assets/sass/**/*.scss')
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(postCss([cssNano()]))
    .pipe(dest('./public/assets/css/'));
}

const watchSass = () => {
    return watch(['./public/assets/sass/**/*.scss'], series(bundleSass));
}

exports.bundleSass = bundleSass;
exports.watchSass = watchSass;