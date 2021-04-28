require('dotenv').config()
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'social-client',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'
            }
        ],
        script: [{
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js'
            },
        ],
    },

    router: {
        middleware: ["clearValidationError"]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "./plugins/mixins/validation",
        "./plugins/axios",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/moment',
        '@nuxtjs/laravel-echo',
        "@nuxtjs/toast", ['@nuxtjs/dotenv', { path: './' }],
    ],
    loading: {
        color: '#007AFF',
        height: '4px'
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.LARAVEL_ENDPOINT,
        credentials: true,
    },
    auth: {
        vuex: {
            namespace: 'nuxtAuth'
        },
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/login', method: 'post', propertyName: 'access_token' },
                    user: { url: '/user/me', method: 'get', propertyName: 'user' },
                    logout: { url: '/user/logout', method: 'post' }
                },
            }
        },
        redirect: {
            login: '/auth/login',
            callback: '/auth/login',
            logout: '/auth/login'
        }
    },

    auth: {
        redirect: {
            login: "/login",
            logout: "/auth/login",
            callback: "/login",
            user: "/profile"
        },
        strategies: {
            password_grant: {
                _scheme: "local",
                endpoints: {
                    login: {
                        url: "/login",
                        method: "post",
                        propertyName: "data.access_token"
                    },
                    logout: false,
                    user: {
                        url: "/user/me"
                    }
                }
            },
            password_grant_custom: {
                _scheme: "~/helpers/schemes/PassportPasswordScheme.js",
                client_id: process.env.PASSPORT_PASSWORD_GRANT_ID,
                client_secret: process.env.PASSPORT_PASSWORD_GRANT_SECRET,
                endpoints: {
                    login: {
                        url: "/login",
                        method: "post",
                        propertyName: "data.access_token"
                    },
                    logout: false,
                    user: {
                        url: "/user/me",
                        method: "get",
                        propertyName: "data"
                    }
                }
            },
            'laravel.passport': {
                url: process.env.LARAVEL_ENDPOINT,
                client_id: process.env.PASSPORT_CLIENT_ID,
                client_secret: process.env.PASSPORT_CLIENT_SECRET,
                userinfo_endpoint: process.env.LARAVEL_ENDPOINT + "/user/me",
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}