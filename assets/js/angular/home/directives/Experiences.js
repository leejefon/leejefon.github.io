/**
 * Experiences Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define(['home/directives', 'home/services/Resume', 'bootstrap'], function (homeDirectives) {
    'use strict';

    return homeDirectives

        .directive('experiences', ['Resume', function (Resume) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/home/partials/experiences.html',
                controller: ['$scope', function ($scope) {
                    Resume.experiences(function (err, data) {
                        $scope.experiences = data.data;
                    });
                }],
                link: function (scope) {

                }
            };
        }]);
});
