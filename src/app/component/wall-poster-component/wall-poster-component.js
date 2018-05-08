(function () {
    'use strict';

    var wallPosterComponent = {
        templateUrl: '../component/wall-poster-component/wall-poster.html',
        bindings: {
            showLoadingSpinner: '='
        }
    };

    angular
        .module('root')
        .component('wallPosterComponent', wallPosterComponent);
})();