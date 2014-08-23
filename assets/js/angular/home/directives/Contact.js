/**
 * Contact Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define(['home/directives'], function (homeDirectives) {
    'use strict';

    return homeDirectives

        .directive('contact', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/home/partials/contact.html',
                controller: ['$scope', function ($scope) {

                }],
                link: function (scope) {

                }
            };
        }]);
});
