const nodemailer = require("nodemailer");
const TemplateHandler = require('../template_handler')

module.exports = class Mailer {
    constructor(config) {
        this._config = config;
        this._client = this._createTransport(this._config);
        this._verifyCredentials();
        this._handler = new TemplateHandler()
    }

    sendMail(recipient, code, locals) {
        return new Promise((resolve, reject) => {
            this._handler.generateTemplate(code, locals, (template, err) => {
                if (!template) {
                    reject(err);
                } else {
                    let mailOptions = this._mailOptions(code, recipient, template);
                    this._transport(mailOptions, (err) => {
                        err ? reject(err) : resolve()
                    })
                }
            });
        })
    }

    _verifyCredentials() {
        this._client.verify((err) => {
            if (err) {
                throw err
            }
        });
    }

    _createTransport(config) {
        return nodemailer.createTransport({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            service: 'yahoo',
            secure: false,
            auth: {
                user: 'lu_construction_estimates@yahoo.com',
                pass: 'z5wJFPjy4eYpuqyZ'
            },
            debug: false,
            logger: true
        });
    }

    _transport(mailOptions, cb) {
        this._client.sendMail(mailOptions, function (err) {
            cb(err)
        });
    }

    _mailOptions(code, to, html) {
        return {
            from: this._config.from,
            to,
            subject: this._handler.subject(code),
            html
        };
    }

}
