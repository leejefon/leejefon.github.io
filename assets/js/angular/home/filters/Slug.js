/**
 * Slug Filter
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/08/29
 */

define(['home/filters'], function (homeFilters) {
    'use strict';

    return homeFilters

        .filter('slug', [function () {
            return function (text) {
                return text
                    .toLowerCase()
                    .replace(/ /g,'-')
                    .replace(/[^\w-]+/g,'');
            };
        }]);
});
