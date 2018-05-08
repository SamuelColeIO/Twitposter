describe('Controller: Contact', function() {
  var $componentController;
  var controller;

  beforeEach(module('root'));

  beforeEach(inject(function($injector) {
    $componentController = $injector.get('$componentController');
    controller = $componentController('contact',
    { scope: {}}
  );
  }))

  it('should exist', function() {
    expect(controller).toBeDefined();
  });

  it('should start with errors as false', function() {
    expect(controller.contact.error).toEqual(false);
  });

  it('should have a function, submitForm', function() {
    expect(controller.submitForm).toBeDefined();
  });
  
})