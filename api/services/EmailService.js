/**
 * Email Service
 *
 * @module      :: Service
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/09/01
 */

var Mailgun = require('mailgun-js');
var fs = require('fs');
var _ = require('underscore');

module.exports = (function(){

    var generalParams = {
        emailDomain: 'jefflee.net',
        adminEmail: 'leejefon@gmail.com',
        adminName: 'Jeff Lee'
    };

    var mailgun = new Mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: generalParams.emailDomain });

    function sendContactEmail (params, cb) {
        _useTemplate('contact', function (emailtpl) {
            var mailOptions = {
                from: params.name + ' <' + params.email + '>',
                to: generalParams.adminName + ' <' + generalParams.adminEmail + '>',
                subject: '[' + generalParams.adminName + '] Contact message from ' + params.name + ' (' + params.email + ')',
                html: emailtpl({
                    msg: params.message
                })
            };

            mailgun.messages().send(mailOptions, cb);
        });
    }

    function _useTemplate (name, callback) {
        var templateUrl = 'views/emailtpls/' + name + '.html';

        fs.exists(templateUrl, function (exists) {
            if (exists) {
                var buffer = fs.readFile(templateUrl, 'utf8', function (err, data) {
                    var emailtpl = _.template(data);
                    callback(emailtpl);
                });
            }
        });
    }

    return {
        sendContactEmail: sendContactEmail
    };
})();
