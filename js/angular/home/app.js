/**
 * Home App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/20
 */

define([
    'angular',
    'angularLoadingBar',
    'home/directives',
    'home/directives/About',
    'home/directives/Blog',
    'home/directives/Contact',
    'home/directives/Education',
    'home/directives/Experiences',
    'home/directives/Projects',
    'home/filters/Slug',
    'home/filters/Html'
], function (angular) {
    'use strict';

    return angular.module('Home', [
        'chieffancypants.loadingBar',
        'Home.directives',
        'Home.filters'
    ]);
});
