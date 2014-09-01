/**
 * Html Filter
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/29
 */

define(['home/filters'], function (homeFilters) {
    'use strict';

    return homeFilters

        .filter('html', ['$sce', function ($sce) {
            return function (text) {
                return $sce.trustAsHtml(text);
            };
        }]);
});
