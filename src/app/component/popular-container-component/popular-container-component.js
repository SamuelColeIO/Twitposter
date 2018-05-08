(function () {
    'use strict';

    var popularContainerComponent = {
        controller: 'PopularContainerController',
        templateUrl: '../component/popular-container-component/popular-container.html',
        bindings: {
            postersData: '<',
            showLoadingSpinner: '=',
            errors: '<'
        }
    };

    angular
        .module('root')
        .component('popularContainerComponent', popularContainerComponent);
    
})();