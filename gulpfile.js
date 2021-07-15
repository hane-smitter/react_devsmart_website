const {src, dest, watch} = require('gulp');
const compileSass = require('gulp-sass')(require('node-sass'));

function bundleSass() {
    return src('./public/assets/sass/**/*.scss')
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(dest('./public/assets/css/'));
}

// const watchSass = () => {
//     return watch(['./public/assets/sass/**/*.scss'], function(bundleSass) {
//         bundleSass();
//     });
// }

exports.bundleSass = bundleSass;
// exports.watchSass = watchSass;