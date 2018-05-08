var termsAndConditions = {
    scope: {},
    templateUrl: '/component/terms-and-conditions-page-component/terms-and-conditions-page.html'
};

angular
    .module('root')
    .component('termsAndConditions', termsAndConditions)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('termsAndConditions', {
                url: '/terms-and-conditions',
                component: 'termsAndConditions'
            });
        $urlRouterProvider.otherwise('/');
    });

    