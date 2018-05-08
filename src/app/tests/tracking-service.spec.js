describe('Service: Tracking', function() {
  var TrackingService;
  var $httpBackend;
  var dataReturned;

  beforeEach(module('root'));

  beforeEach(inject(function($injector) {
    TrackingService = $injector.get('TrackingService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should return track-order', inject(function($rootScope) {
    TrackingService.trackOrder().then(function(data) {
      dataReturned = data.data[0].service;
    })
  .then(function() {
    expect(dataReturned).toEqual('track-order');
  });
}));     
})
