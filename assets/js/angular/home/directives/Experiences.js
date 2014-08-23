/**
 * Experiences Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define(['home/directives', 'bootstrap'], function (homeDirectives) {
    'use strict';

    return homeDirectives

        .directive('experiences', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/home/partials/experiences.html',
                controller: ['$scope', function ($scope) {

                }],
                link: function (scope) {

                }
            };
        }]);
});
