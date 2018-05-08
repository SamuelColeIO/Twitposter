var landing = {
    scope: {},
    templateUrl: '/component/landing-page-component/landing-page.html',
    controller: "LandingController"
};

angular
    .module('root')
    .component('landing', landing)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('landing', {
                url: '/',
                component: 'landing'
            });
        $urlRouterProvider.otherwise('/');
    });