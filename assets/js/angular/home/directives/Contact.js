/**
 * Contact Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define(['home/directives', 'bootstrapWysihtml5'], function (homeDirectives) {
    'use strict';

    return homeDirectives

        .directive('contact', ['$http', function ($http) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/home/partials/contact.html',
                controller: ['$scope', function ($scope) {
                    $scope.contactForm = {};

                    $scope.sendmail = function () {
                        $http.post('/sendmail', $scope.contactForm).success(function (data) {
                            // TODO: show msg sent msg
                        });
                    };
                }],
                link: function (scope) {
                    $('textarea').wysihtml5({
                        image: false,
                        events: {
                            change: function () {
                                // Hack: because ng-model doesn't work when use wysihtml5
                                scope.contactForm.message = $('#contactMessage').val();
                                scope.$apply();
                            }
                        }
                    });
                }
            };
        }]);
});
