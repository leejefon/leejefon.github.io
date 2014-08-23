/**
 * Blog Directive
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define(['home/directives', 'home/services/Blog', 'jqueryEasing'], function (homeDirectives) {
    'use strict';

    return homeDirectives

        .directive('blog', ['Blog', function (Blog) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/js/angular/home/partials/blog.html',
                controller: ['$scope', function ($scope) {

                }],
                link: function (scope) {
                    //Showing blog items
                    $('#blog-items .more-info').click(function(e){
                        e.preventDefault();
                        var targetId = $(this).attr('href');
                        $('#blog-items').hide();
                        $(targetId+', #full-blog-items #blog-back').hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
                    });

                    $('#blog-back').click(function(e){
                        e.preventDefault();
                        $('.blogitem-content:visible, #blog-back').hide().addClass('hidden');
                        $('#blog-items').fadeIn('400', 'easeInOutCubic');
                        var documentBody = $('html, body');
                        $(documentBody).animate({scrollTop: $('#blog').offset().top}, 1000,'easeInOutCubic');
                    });

                    //Blog item nav
                    $('.blogitem-content .pager a').click(function(e){
                        e.preventDefault();
                        var targetId = $(this).attr('href');
                        $('.blogitem-content:visible').hide().addClass('hidden');
                        $(targetId).hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
                    });

                    //blogitem hover
                    $(document).on("mouseenter", '.blogitem, .portfolioitem', function(){
                        $('.blogitem-hoverinfo, .portfolioitem-hoverinfo', this).stop(true, true).fadeIn('200', 'easeInOutCubic');
                    });

                    $(document).on("mouseleave", '.blogitem, .portfolioitem', function(){
                        $('.blogitem-hoverinfo, .portfolioitem-hoverinfo', this).stop(true, true).fadeOut('200', 'easeInOutCubic');
                    });

                    // //Isotop related actions
                    // var $containerblog = $('#blog-items');
                    // // initialize isotope
                    // $containerblog.imagesLoaded( function(){
                    //     $containerblog.isotope({
                    //          itemSelector : '.blogitem',
                    //          layoutMode : 'fitRows'
                    //     });
                    //
                    // });
                }
            };
        }]);
});
