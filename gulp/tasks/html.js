module.exports =()=>{
  $.gulp.task('html',()=>{
    $.gulp.src($.path.src.html)
    .pipe($.gp.dest($.path.build.html))
  })
}