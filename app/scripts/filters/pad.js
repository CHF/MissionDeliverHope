'use strict';

/**
 * @ngdoc filter
 * @name chfSitesApp.filter:pad
 * @function
 * @description
 * # pad
 * Filter in the chfSitesApp.
 */
angular.module('chfSitesApp')
  .filter('pad', function() {
    return function(number, padding) {
      padding = (padding || 0);
      if (number !== null && number !== undefined) {
        var str = '' + number;
        while (str.length < padding) str = '0' + str;
        return str;
      }
    };
  });
