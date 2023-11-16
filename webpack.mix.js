const mix = require('laravel-mix');

mix
  .js('./src/main.js', 'dist/smb-helpers.bundle.js')
  .sass('./src/scss/main.scss', 'css/smb-helpers.bundle.css')
  .setPublicPath('dist')