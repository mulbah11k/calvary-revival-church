(function () {
  'use strict';

  angular
    .module('app', [])
    .controller('mainController', function ($scope, $window) {
      $scope.country = localStorage.getItem('country') || 'ghana';
      var referrerUrl = document.referrer;

      $scope.changeCountry = function () {
        localStorage.setItem('country', $scope.country);
      };

      switch (referrerUrl) {
        case 'https://www.ng.asoriba.com':
          $scope.country = 'nigeria';
          $scope.changeCountry();
          break;
        case 'http://sa.asoriba.com':
          $scope.country = 'south_africa';
          $scope.changeCountry();
          break;
        default:
          $scope.country = localStorage.getItem('country') || 'ghana';
          $scope.changeCountry();
      }
    });
})();
