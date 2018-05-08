describe('Controller: Order Tracking', function() {
  var $componentController;
  var controller;

  beforeEach(module('root'));

  beforeEach(inject(function($injector) {
    $componentController = $injector.get('$componentController');
    controller = $componentController('orderTracking',
    { scope: {}}
  );
  }))

  it('should exist', function() {
    expect(controller).toBeDefined();
  });

  it('should have a placeholder of Tracking Number', function() {
    expect(controller.placeholder).toEqual('Tracking Number');
  });

  it('should have a function, trackOrder', function() {
    expect(controller.trackOrder).toBeDefined();
  });
})