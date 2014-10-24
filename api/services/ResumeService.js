/**
 * Resume Service
 *
 * @module      :: Service
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/08/26
 */

module.exports = (function () {

    var resumeOwner = 'Jeff Lee';

    function get (category, cb) {
        if (category === 'profile') {
            _getProfile(cb);
        } else {
            _getCategory(category, cb);
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

    function _getCategory (category, cb) {
        Resume.findOneByName(resumeOwner, function (err, data) {
            cb(null, data[category]);
        });
    }

    return {
        get: get
    };
})();
