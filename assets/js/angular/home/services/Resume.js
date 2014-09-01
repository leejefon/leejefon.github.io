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
                profile: function (cb) {
                    $http.get('/resume/profile').success(function (data) {
                        cb(null, data);
                    });
                },
                experiences: function (cb) {
                    $http.get('/resume/experiences').success(function (data) {
                        cb(null, data);
                    });
                },
                education: function (cb) {
                    $http.get('/resume/education').success(function (data) {
                        cb(null, data);
                    });
                },
                projects: function (cb) {
                    $http.get('/resume/projects').success(function (data) {
                        cb(null, data);
                    });
                }
            };
        }]);
});
