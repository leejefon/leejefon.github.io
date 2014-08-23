/**
 * Home
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

require.config({
    baseUrl: '/js/angular',
    paths: {
        jquery: '../vendor/jquery/dist/jquery.min',
        jqueryEasing: '../vendor/jquery-easing/jquery.easing.min',
        jqueryIsotope: '../jquery.isotope.min',
        jqueryPrettyPhoto: '../vendor/jquery-prettyPhoto/js/jquery.prettyPhoto',
        bootstrap: '../vendor/bootstrap2/js/bootstrap.min',

        angular: '../vendor/angular/angular.min',
        angularRoute: '../vendor/angular-route/angular-route.min',
        angularCookies: '../vendor/angular-cookies/angular-cookies.min',
    },
    shim: {
        jqueryEasing: ['jquery'],
        jqueryIsotope: ['jquery'],
        jqueryPrettyPhoto: ['jquery'],
        bootstrap: ['jquery'],
        angular: { exports: 'angular', deps: ['jquery'] },
        angularRoute: ['angular'],
        angularCookies: ['angular'],
    }
});

require([
    'angular',
    'home/app'
], function (angular, homeApp) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, [homeApp.name]);
    });
});
