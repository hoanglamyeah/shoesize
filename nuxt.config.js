module.exports = {
    /*
    ** Headers of the page
    */
    minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeAttributeQuotes: false,
        removeComments: false,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: false,
        removeTagWhitespace: false,
        sortAttributes: true,
        sortClassName: false,
        trimCustomFragments: true,
        useShortDoctype: true
    },
    head: {
        titleTemplate: '%s - YourShoeSize.com',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'Your Shoe Size help you to find automatic the right shoe size by using machine learning and big data. Just need your foot size!'
            }
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extractCSS: true,
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    modules: [
        // Simple usage
        'nuxt-buefy'
    ],
    plugins: [
        {src: '~plugins/component.js', ssr: true},
        {src: '~plugins/component_font.js', ssr: false},
        {src: '~plugins/ga.js', ssr: false}
    ],
    css: [
        'buefy/lib/buefy.css',
        '@/assets/css/_app.scss',
        '@/assets/css/main.css',
        'flag-icon-css/css/flag-icon.css'
    ]
}
