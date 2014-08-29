'use strict';

/**
 * @ngdoc service
 * @name chfSitesApp.churchList
 * @description
 * # churchList
 * Factory in the chfSitesApp.
 */
angular.module('chfSitesApp')
  .factory('churchList', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
