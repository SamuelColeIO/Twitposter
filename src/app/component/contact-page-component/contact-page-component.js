var contact = {
    scope: {},
    templateUrl: '/component/contact-page-component/contact-page.html',
    controller: "ContactController"
};

angular
    .module('root')
    .component('contact', contact)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('contact', {
                url: '/contact',
                component: 'contact'
            });
        $urlRouterProvider.otherwise('/');
    });