import path from 'path';

export default {
    mode: 'spa',

    /*
  ** Headers of the page
  */
    head: {
        title: 'استیکر لپتاپ فلربو - لپتاپ چین',
        htmlAttrs: {
            lang: 'fa',
            dir: 'rtl',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    /*
  ** Customize the progress-bar color
  */
    loading: { color: '#fff' },

    /*
  ** Global CSS
  */
    css: [
        '@/assets/styles/global.css',
    ],

    /*
  ** Plugins to load before mounting the App
  */
    plugins: [
    ],

    /*
  ** Nuxt.js modules
  */
    modules: [
    // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/svg-sprite',
    ],
    /*
  ** Axios module configuration
  */
    axios: {
        baseURL: 'https://api.sheety.co/',
    // See https://github.com/nuxt-community/axios-module#options
    },

    /*
  ** Build configuration
  */
    build: {
    /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {
            if (ctx.isClient) {
                let src = config.resolve.alias['~'];
                config.resolve.alias['~vars'] = path.join(src, 'assets/styles/vars/all.css');
                config.resolve.alias['~endpoints'] = path.join(src, 'scripts/utils/endpoints.js');
            }
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
        postcss: {
            plugins: {
                'precss': {},
                'postcss-easings': {},
                'postcss-color-function': {},
                'postcss-utilities': {
                    centerMethod: 'flexbox',
                },
            },
        },
    },
};
