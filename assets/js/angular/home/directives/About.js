/**
 * About Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define(['home/directives', 'home/services/Resume'], function (homeDirectives) {
    'use strict';

    return homeDirectives

        .directive('about', ['Resume', function (Resume) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/home/partials/about.html',
                controller: ['$scope', function ($scope) {
                    Resume.profile(function (err, data) {
                        $scope.profile = data.data;
                    });
                }],
                link: function (scope) {

                }
            };
        }]);
});
