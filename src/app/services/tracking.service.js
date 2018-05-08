function TrackingService() {
    this.trackOrder = function () {
        return new Promise(function (resolve, reject) {
            resolve(
                {
                    'data': [
                        {
                            'service': 'track-order',
                        }
                    ]
                }
            );
        })
    }
};

angular.module('root')
    .service('TrackingService', TrackingService);