describe('Service: Order', function() {
  var OrderService;
  var $httpBackend;
  var dataReturned;

  beforeEach(module('root'));

  beforeEach(inject(function($injector) {
    OrderService = $injector.get('OrderService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should return purchase', inject(function($rootScope) {
    OrderService.purchasePoster().then(function(data) {
      dataReturned = data.data[0].service;
    })
  .then(function() {
    expect(dataReturned).toEqual('purchase');
  });
}));     
})
