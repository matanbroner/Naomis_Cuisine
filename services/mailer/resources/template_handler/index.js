const handlebars = require('handlebars');
const fs = require('fs');

module.exports = class TemplateHandler {

  constructor(){
    this._configure()
  }

  generateTemplate(code, locals) {
    return new Promise((resolve, reject) => {
        this._readHTMLFile(__dirname + this.templates[code].path, function (err, html) {
            if (err) {
              reject(err)
            } else {
              let template = handlebars.compile(html);
              let htmlToSend = template(locals);
              resolve(htmlToSend)
            }
          });
    })
  }

  subject(code) {
    return this.templates[code].subject;
  }

  isCodeValid(code){
      return typeof this.templates[code] !== 'undefined'
  }

  _configure(){
    this.templates = {
      REFFERED_REGISTRATION: {
        path: require.resolve('../templates/reffered_registration/index.html'),
        subject: 'Register Yourself at Affordable ADU Builders!'
      }
    }
  }

  _readHTMLFile(path, callback) {
    fs.readFile(path, {
      encoding: 'utf-8'
    }, function (err, html) {
      if (err) {
        callback(err);
      } else {
        callback(null, html);
      }
    });
  };
};
