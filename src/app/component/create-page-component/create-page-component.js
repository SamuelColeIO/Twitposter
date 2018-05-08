var create = {
    scope: {},
    templateUrl: '/component/create-page-component/create-page.html',
    controller: "CreateController"
};

angular
    .module('root')
    .component('create', create)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('create', {
                url: '/create/:id/:user',
                params: {
                    data: null
                },
                component: 'create'
            });
        $urlRouterProvider.otherwise('/');
    });