function OrderService($http) {
    this.makePayment = function(token) {
        return $http({
            method: 'POST',
            url: '/api/v1/make-payment',
            data: {token: token}
        }).then(function(status) {
            alert("Your payment worked");
            return status
        }, function() {
            // handle error;
        });
    } 
};

angular.module('root')
    .service('OrderService', OrderService);