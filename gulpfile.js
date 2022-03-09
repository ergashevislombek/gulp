global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  path: {
    serverDirL: './app/dist',
    src: {
      html: './app/src/*.{html,pug,jade}'
    },
    build: {
      html: './app/dist/'
    }
  }
}
const html = require('./gulp/tasks/html.js')()