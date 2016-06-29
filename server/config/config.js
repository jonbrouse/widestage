var mongohost = process.env.MONGOHOST || 'localhost';

module.exports = {
    development: {
        url: 'http://0.0.0.0:8080/',
        ip: "0.0.0.0",
        port: 8080,
        db: 'mongodb://' + mongohost + ':27017/widestage_development',
        app: {
            name: 'WideStage',
            contactEmail: '',
            collectionsPrefix: 'nd_',
            customCollectionsPrefix: 'wst_'
        },
        crypto: {
            enabled: true,
            secret: 'SecretPassphrase'
        },
        mailer: {
            service: 'SMTP', //SMTP, sendgrid, mandrill, etc... list of services nodemailer-wellknown
            host: 'smtp.yourserver.com', // hostname
            secureConnection: false, // use SSL
            port: 25, // port for secure SMTP
            auth: {
                user: 'no_reply@yourserver.com',
                pass: 'yourpassword'
            },
            from: 'no_reply@yourserver.com'
        },
        pagination: {
            itemsPerPage: 10
        },
        query: {
            defaultRecordsPerPage: 500
        }
    },
    production: {
        url: 'http://0.0.0.0',
        ip: "0.0.0.0",
        port: 80,
        db: 'mongodb://' + mongohost + ':27017/widestage',
        app: {
            name: 'WideStage',
            contactEmail: '',
            collectionsPrefix: 'nd_',
            customCollectionsPrefix: 'wst_'
        },
        crypto: {
            enabled: true,
            secret: 'SecretPassphrase'
        },
        mailer: {
            service: 'SMTP', //SMTP, sendgrid, mandrill, etc... list of services nodemailer-wellknown
            host: 'smtp.yourserver.com', // hostname
            secureConnection: false, // use SSL
            port: 25, // port for secure SMTP
            auth: {
                user: 'no_reply@yourserver.com',
                pass: 'yourpassword'
            },
            from: 'no_reply@yourserver.com'
        },
        pagination: {
            itemsPerPage: 10
        },
        query: {
            defaultRecordsPerPage: 500
        }
    },
    local: {
        url: 'http://0.0.0.0:8081/',
        ip:  "127.0.0.1",
        port: 8081,
        db: 'localhost:27017/widestage_development',
        app: {
            name: 'WideStage',
            contactEmail: '',
            collectionsPrefix: 'nd_',
            customCollectionsPrefix: 'wst_'
        },
        crypto: {
            enabled: true,
            secret: 'SecretPassphrase'
        },
        mailer: {
            service: 'SMTP', //SMTP, sendgrid, mandrill, etc... list of services nodemailer-wellknown
            host: 'smtp.yourserver.com', // hostname
            secureConnection: false, // use SSL
            port: 25, // port for secure SMTP
            auth: {
                user: 'no_reply@yourserver.com',
                pass: 'yourpassword'
            },
            from: 'no_reply@yourserver.com'
        },
        pagination: {
            itemsPerPage: 10
        },
        query: {
            defaultRecordsPerPage: 500
        }
    }
}
