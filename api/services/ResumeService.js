/**
 * Resume Service
 *
 * @module      :: Service
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/08/26
 */

var validator = require('validator');

module.exports = (function () {

    var resumeOwner = 'Jeff Lee';

    function get (category, cb) {
        if (category === 'profile') {
            _getProfile(cb);
        } else if (category === 'experiences') {
            _getExperiences(cb);
        } else if (category === 'education') {
            _getEducation(cb);
        } else if (category === 'projects') {
            _getEducation(cb);
        } else {
            cb('No such category');
        }
    }

    function _getProfile (cb) {
        Resume.findOneByName(resumeOwner, function (err, data) {
            cb(null, {
                name: data.name,
                avatar: data.avatar,
                bio: data.bio,
                social: data.social
            });
        });
    }

    function _getExperiences (cb) {
        Resume.findOneByName(resumeOwner, function (err, data) {
            cb(null, data.experiences);
        });
    }

    function _getEducation (cb) {
        Resume.findOneByName(resumeOwner, function (err, data) {
            cb(null, data.education);
        });
    }

    function _getProjects (cb) {
        Resume.findOneByName(resumeOwner, function (err, data) {
            cb(null, data.projects);
        });
    }

    return {
        get: get
    };
})();
