function OrderTrackingController(TrackingService) {
    var $ctrl = this;

    $ctrl.toggleButtonLoader = false;    

    $ctrl.errors = [];

    $ctrl.placeholder = "Tracking Number";

    $ctrl.trackOrder = function () {
        $ctrl.toggleButtonLoader = true;        
        TrackingService.trackOrder().then(function (response) {
            $ctrl.toggleButtonLoader = false;
        }, function () {
            $ctrl.toggleButtonLoader = false;
            $ctrl.errors.push('Could not connect to Tracking API');
        });
    };
}

angular
    .module("root")
    .controller("OrderTrackingController", OrderTrackingController);