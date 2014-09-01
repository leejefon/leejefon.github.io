/**
 * Education Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define(['home/directives', 'home/services/Resume', 'bootstrap'], function (homeDirectives) {
    'use strict';

    return homeDirectives

        .directive('education', ['Resume', function (Resume) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/home/partials/education.html',
                controller: ['$scope', function ($scope) {
                    Resume.education(function (err, data) {
                        $scope.education = data.data;
                    });
                }],
                link: function (scope) {
                    // Wait until data is loaded.
                    setTimeout(function(){
                        $('.timeline-item-trigger span').click(function(){
                            if($(this).hasClass('circle_plus')){$(this).removeClass('circle_plus').addClass('circle_minus');}
                            else{$(this).removeClass('circle_minus').addClass('circle_plus');}
                        });

                        $('.timeline-item-title').click(function(){
                            var $trigger = $(this).parent().parent().find('.timeline-item-trigger span');
                            if($trigger.hasClass('circle_plus')){$trigger.removeClass('circle_plus').addClass('circle_minus');}
                            else{$trigger.removeClass('circle_minus').addClass('circle_plus');}
                        });
                    }, 1000);
                }
            };
        }]);
});
