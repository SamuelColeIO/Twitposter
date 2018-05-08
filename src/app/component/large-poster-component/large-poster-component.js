(function () {
    'use strict';

    var largePosterComponent = {
        templateUrl: '../component/large-poster-component/large-poster.html',
        controller: 'LargePosterController',
        bindings: {
            poster: '<',
            showLoadingSpinner: '='
        }
    };

    angular
        .module('root')
        .component('largePosterComponent', largePosterComponent);
    
})();