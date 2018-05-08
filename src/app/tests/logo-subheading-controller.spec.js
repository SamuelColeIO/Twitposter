describe('Controller: Logo Subheading', function() {
  var $componentController;
  var controller;

  beforeEach(module('root'));

  beforeEach(inject(function($injector) {
    $componentController = $injector.get('$componentController');
    controller = $componentController('logoSubheadingComponent',
    { scope: {}}
  );
  }))

  it('should exist', function() {
    expect(controller).toBeDefined();
  })
})