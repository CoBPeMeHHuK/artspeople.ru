const mix = require('laravel-mix');

mix.options({
        processCssUrls: false
    })

    .js('resources/js/app.js', 'public/js')
    .js('resources/js/backend/create.js', 'public/js')
    .js('resources/js/backend/dropzone.js', 'public/js')
    .js('resources/js/backend/dropzone_sliders.js', 'public/js')
    .js('resources/js/backend/index.js', 'public/js')
    .js('resources/js/frontend/main.js', 'public/js')
    .js('resources/js/frontend/about.js', 'public/js')
    .js('resources/js/frontend/articles.js', 'public/js')

    .sass('resources/sass/frontend/upload.scss','public/css')
    .sass('resources/sass/auth/auth.scss','public/css')
    .sass('resources/sass/auth/util.scss','public/css')
    .sass('resources/sass/backend/admin.scss','public/css')
    .sass('resources/sass/backend/editor.scss','public/css')
    .sass('resources/sass/frontend/animate.scss','public/css')
    .sass('resources/sass/frontend/hamburger-profile.min.scss','public/css')
    .sass('resources/sass/frontend/hamburgers.min.scss','public/css')
    .sass('resources/sass/frontend/magnific.scss','public/css')
    .sass('resources/sass/frontend/main.scss','public/css')
    .sass('resources/sass/frontend/articles.scss','public/css')
    .sass('resources/sass/frontend/about.scss','public/css')
    .sass('resources/sass/frontend/preloader.scss','public/css')
    .sass('resources/sass/frontend/profile.scss','public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/auth/selectric.scss', 'public/css')
    .version();
