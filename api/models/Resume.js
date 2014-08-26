/**
 * Resume
 *
 * @module      :: Model
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/08/19
 */

module.exports = (function(){

    var tableName = 'resume';

    var attributes = {
        name: {
            type: 'string',
            required: true
        },
        experiences: {
            type: 'array'
        },
        education: {
            type: 'array'
        },
        certifications: {
            type: 'array'
        },
        social: {
            type: 'array'
        }
    };

    if (process.env.NODE_ENV === 'development') {
        tableName += '_test';
    }

    return {
        tableName: tableName,
        attributes: attributes
    };
})();
