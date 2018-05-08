var orderTracking = {
    scope: {},
    templateUrl: '/component/order-tracking-page-component/order-tracking-page.html',
    controller: "OrderTrackingController"
};

angular
    .module('root')
    .component('orderTracking', orderTracking)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('orderTracking', {
                url: '/order-tracking',
                component: 'orderTracking'
            });
        $urlRouterProvider.otherwise('/');
    });