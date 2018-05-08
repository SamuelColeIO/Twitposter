describe('Controller: Confirmation', function() {
  var $componentController;
  var controller;

  beforeEach(module('root'));

  beforeEach(inject(function($injector) {
    $componentController = $injector.get('$componentController');
    controller = $componentController('confirmation',
    { scope: {}}
  );
  }))

  it('should exist', function() {
    expect(controller).toBeDefined();
  });
  
  it('should have a function, createAnother', function() {
    expect(controller.createAnother).toBeDefined();
  });
})