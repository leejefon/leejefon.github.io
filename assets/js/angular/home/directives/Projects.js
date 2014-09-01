/**
 * Projects Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define(['home/directives', 'home/services/Resume', 'jqueryPrettyPhoto', 'jqueryIsotope'], function (homeDirectives) {
    'use strict';

    return homeDirectives

        .directive('projects', ['Resume', function (Resume) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/home/partials/projects.html',
                controller: ['$scope', function ($scope) {
                    Resume.projects(function (err, data) {
                        $scope.projects = data.data;
                    });
                }],
                link: function (scope) {
                    //Showing portfolio items
                    $('#portfolio-items .more-info').click(function(e){
                        e.preventDefault();
                        var targetId = $(this).attr('href');
                        $('#portfolio-items, #portfolio-filters').hide();
                        $(targetId+', #portfolio-back').hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
                    });

                    $('#portfolio-back').click(function(e){
                        e.preventDefault();
                        $('.portfolioitem-content:visible, #portfolio-back').hide().addClass('hidden');
                        $('#portfolio-items, #portfolio-filters').fadeIn('400', 'easeInOutCubic');
                        var documentBody = $('html, body');
                        $(documentBody).animate({scrollTop: $('#projects').offset().top}, 1000,'easeInOutCubic');
                    });

                    //portfolio item nav
                    $('.portfolioitem-content .pager a').click(function(e){
                        e.preventDefault();
                        var targetId = $(this).attr('href');
                        $('.portfolioitem-content:visible').hide().addClass('hidden');
                        $(targetId).hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
                    });

                    //blogitem hover
                    $(document).on("mouseenter", '.blogitem, .portfolioitem', function(){
                        $('.blogitem-hoverinfo, .portfolioitem-hoverinfo', this).stop(true, true).fadeIn('200', 'easeInOutCubic');
                    });

                    $(document).on("mouseleave", '.blogitem, .portfolioitem', function(){
                        $('.blogitem-hoverinfo, .portfolioitem-hoverinfo', this).stop(true, true).fadeOut('200', 'easeInOutCubic');
                    });

                    //isotope filtering
                    var $container = $('#portfolio-items');
                    $container.imagesLoaded( function(){
                        $container.isotope({
                             itemSelector : '.portfolioitem',
                             layoutMode : 'fitRows'
                        });
                    });

                    // filter items when filter link is clicked
                    $('#portfolio-filters a').click(function(){
                        $('#portfolio-filters a').parent('li').removeClass('active');
                          var selector = $(this).attr('data-filter');
                          $container.isotope({ filter: selector });
                          $(this).parent('li').addClass('active');
                          return false;
                    });

                    $("a[rel^='prettyPhoto']").prettyPhoto({
                        social_tools: ''
                    });
                }
            };
        }]);
});
