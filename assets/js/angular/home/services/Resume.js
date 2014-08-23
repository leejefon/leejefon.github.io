/**
 * Resume Service
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define(['home/services'], function (homeServices) {
    'use strict';

    return homeServices

        .factory('Resume', ['$http', function ($http) {
            return {
                info: function () {

                },
                experiences: function () {

                },
                education: function () {

                },
                projects: function () {

                }
            };
        }]);
});
