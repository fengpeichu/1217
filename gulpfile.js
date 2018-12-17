var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});
gulp.task('watch', function() {
    gulp.watch('./src/sass/*.scss', gulp.series('sass'))
});
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: '9090',
            proxies: [{
                source: '/users/api/get/train_tickets',
                target: 'http://169.254.237.125:3000/users/api/get/train_tickets'
            }]
        }))
});
gulp.task('dev', gulp.series('sass', 'server', 'watch'));