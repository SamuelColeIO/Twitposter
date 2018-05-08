var confirmation = {
    scope: {},
    templateUrl: '/component/confirmation-page-component/confirmation-page.html',
    controller: "ConfirmationController"
};

angular
    .module('root')
    .component('confirmation', confirmation)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('confirmation', {
                url: '/confirmation',
                component: 'confirmation'
            });
        $urlRouterProvider.otherwise('/');
    });