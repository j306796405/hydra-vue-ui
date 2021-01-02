const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const components = require('./components.json')

function buildCss (src, target, name, cb = () => {}) {
    gulp.src(src)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename(name))
        .pipe(gulp.dest(target));
    cb()
}

function buildCombinedCss (cb) {
    buildCss("../src/styles/index.scss", '../lib/styles', 'hydra-vue-ui.css', cb)
}

function buildSeparateCss (cb) {
    Object.keys(components).forEach(compName => {
        buildCss(`../src/styles/${compName}.scss`, '../lib/styles', `${compName}.css`)
    })

    cb()
}

exports.default = gulp.series(buildCombinedCss, buildSeparateCss)
