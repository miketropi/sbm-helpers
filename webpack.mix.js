const mix = require('laravel-mix');

mix
  .js('./src/main.js', 'dist/smb-helpers.bundle.js')
  .js('./src/admin.js', 'dist/smb-helpers-admin.bundle.js')
  .react()
  .sass('./src/scss/main.scss', 'css/smb-helpers.bundle.css')
  .sass('./src/scss/admin.scss', 'css/smb-helpers-admin.bundle.css')
  .options({
    processCssUrls: false
  })
  .setPublicPath('dist')
  