var privacyPolicy = {
    scope: {},
    templateUrl: '/component/privacy-policy-page-component/privacy-policy-page.html'
};

angular
    .module('root')
    .component('privacyPolicy', privacyPolicy)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('privacyPolicy', {
                url: '/privacy-policy',
                component: 'privacyPolicy'
            });
        $urlRouterProvider.otherwise('/');
    });