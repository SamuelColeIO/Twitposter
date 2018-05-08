(function () {
    'use strict';

    var posterTestComponent = {
        templateUrl: '/component/poster-test-page-component/poster-test-page.html',
        controller: 'PosterTestController'
    };

    angular
        .module('root')
        .component('posterTestComponent', posterTestComponent)
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('postertest', {
                    url: '/postertest',
                    component: 'posterTestComponent'
                });
            $urlRouterProvider.otherwise('/');
        });
})();