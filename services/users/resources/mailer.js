const nodemailer = require('nodemailer')
const EmailTemplate = require('email-templates');

module.exports = class Mailer {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            service: 'yahoo',
            secure: false,
            auth: {
                user: 'email@fake-domain.com',
                pass: 'fakePassword'
            },
            debug: false,
            logger: true
        });
    }

    sendTemporaryPassword(hash) {
        const email = new EmailTemplate({
            transport: transporter,
            send: true,
            preview: false
          });

          email.send({
            template: '../emailTemplates/verification.pug',
            message: {
              from: 'Naomi\'s Cuisine <lu_construction_estimates@yahoo.com>',
              to: regsiter.email,
            },
            locals: {
              name: regsiter.name,
              url: `http://localhost/user`,
            }
          }).then(() => console.log('email has been sent!')); 
    }

    relayMessage(email, template) {
        const mailConfig = {
            from: 'lu_construction_estimates@yahoo.com',
            to: 'appointments@luconstruction.com',
            subject: 'LU Construction Estimate Request',
            html: template
        };

        this.transporter.sendMail(mailConfig, function (error, info) {
            if (error) {
                res.status(404).json({
                    err: "Email was not relayed to customer."
                });
            } else {
                res.status(200).json({
                    sent: "Email was relayed to customer."
                });
            }
        });
    }
}