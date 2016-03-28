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
        jqueryIsotope: '../vendor/jquery-isotope/jquery.isotope.min',
        jqueryPrettyPhoto: '../vendor/jquery-prettyPhoto/js/jquery.prettyPhoto',
        wysihtml5: '../vendor/wysihtml5/dist/wysihtml5-0.3.0.min',
        bootstrap: '../vendor/bootstrap2/js/bootstrap.min',
        bootstrapWysihtml5: '../vendor/bootstrap-wysihtml5/dist/bootstrap-wysihtml5-0.0.2.min',
        toastr: '../vendor/toastr/toastr',

        angular: '../vendor/angular/angular.min',
        angularRoute: '../vendor/angular-route/angular-route.min',
        angularCookies: '../vendor/angular-cookies/angular-cookies.min',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar'
    },
    shim: {
        jqueryEasing: ['jquery'],
        jqueryIsotope: ['jquery'],
        jqueryPrettyPhoto: ['jquery'],
        bootstrap: ['jquery'],
        bootstrapWysihtml5: ['wysihtml5'],

        angular: { exports: 'angular', deps: ['jquery'] },
        angularRoute: ['angular'],
        angularCookies: ['angular'],
        angularLoadingBar: ['angular']
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
