/**
 * Blog Service
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define(['home/services'], function (homeServices) {
    'use strict';

    return homeServices

        .factory('Blog', ['$http', function ($http) {
            return {
                latest: function () {
                    
                }
            };
        }]);
});
