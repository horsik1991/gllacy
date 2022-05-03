const gulp = require('gulp'),
      plumber = require('gulp-plumber'), //проверяет на наличие ошибок
      stylus = require('gulp-stylus'),   //преобразует стилус в css
      minCss = require('gulp-cssmin'),   //сжатие css
      rename = require('gulp-rename'),   //переименование файлов. В частноти, здесь использую для добавления суффикса min
      sourcemaps = require('gulp-sourcemaps'), // карта сайта. Позволяет в инспекторе кода увидеть откуда конкретно пришло то или иное свойство
      concat = require('gulp-concat'),   // объединение файлов
      ug = require('uglify-js'), // сжатие js кода
      del = require('del'),
      eslint = require('eslint'),
      server = require('browser-sync').create(),
      commonStyle = gulp.series(helpers,styles),
      pug = require('gulp-pug');
const dev = gulp.parallel(pug2html, js, commonStyle, images, fonts);

function helpers (){
    return gulp.src(['dev/static/instruments/*.styl','!dev/static/instruments/vars.styl'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('helpers.styl'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dev/static/instruments'))

}

// Работаем со стилями, а также подключаем библиотеки, которые находятся в LIBS
function styles() {
    return gulp.src(['dev/static/instruments/vars.styl','dev/static/instruments/helpers.styl','dev/static/libs/*.+(css|styl)','dev/blocks/**/*.styl'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('styles.styl'))
        .pipe(stylus())
        .pipe(minCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/static/css'))
};

//Подгружаем скрипты и библиотеки (которые кладем в папку vendor)
function js() {
    return gulp.src(['dev/static/js/vendor/*.js','dev/blocks/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/static/js'))
};

//Обрабатываем pug -> html
function pug2html(){
    return gulp.src('dev/blocks/pages/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(plumber.stop())
        .pipe(gulp.dest('dist'))
};

// Полностью удаляем папку dist после сборки
function clean(cb) {
    return del(['dist','dev/static/instruments/helpers.styl']).then(() => {
        cb()
    })
};


// // Копируем все шрифты из папки dev в dist
function fonts() {
    return gulp.src('dev/static/fonts/*.*')
        .pipe(plumber())
        .pipe(gulp.dest('dist/static/fonts'))
};

function images(){
    return gulp.src('dev/static/images/**/*.+(jpg|jpeg|png|gif|svg)')
        .pipe(plumber())
        .pipe(gulp.dest('dist/static/images'))
}



// Запуск сервера а также слежка за файлами
function serve(cb) {
    server.init({
        server: 'dist',
        notify: false,
        open: true,
        cors: true
    });


    gulp.watch('dev/blocks/**/*.styl',
        gulp.series(styles)).on('change', server.reload);
    gulp.watch('dev/static/instruments/helpers.styl',
        gulp.series(styles)).on('change', server.reload);
    gulp.watch('dev/static/**/*.styl',
        gulp.series(styles)).on('change', server.reload);
    gulp.watch('dev/blocks/**/*.js', gulp.series(js)).on('change', server.reload);
    gulp.watch('dev/static/images/**/*.*', gulp.series(images)).on('change', server.reload);
    gulp.watch('dev/blocks/**/*.pug', gulp.series(pug2html));
    gulp.watch('dist/*.html').on('change', server.reload);

    return cb()
};







exports.default = gulp.series(
    clean,
    dev,
    serve
);
//Для теста модулей
exports.test = gulp.series(
    clean,
    helpers,
    styles
);