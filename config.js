var path = require('path'),
    config;

config = {
    // Production
    production: {
        url: 'http://webstrat.leops.me',
        mail: {},
        database: {
            client: 'pg',
            connection: process.env.DATABASE_URL
        },

        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    },

    // Development
    development: {
        url: 'http://localhost:1337',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '1337'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },
};

module.exports = config;
