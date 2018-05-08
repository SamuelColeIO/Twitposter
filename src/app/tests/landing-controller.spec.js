describe('Controller: Landing', function() {
  var $componentController;
  var controller;

  beforeEach(module('root'));

  beforeEach(inject(function($injector) {
    $componentController = $injector.get('$componentController');
    controller = $componentController('landing',
    { scope: {}}
  );
  }))

  it('should exist', function() {
    expect(controller).toBeDefined();
  })

  it('should start with popularLoadingSpinner set to true', function() {
    expect(controller.showPopularLoadingSpinner).toEqual(true);
  });

  it('should start with recentLoadingSpinner set to true', function() {
    expect(controller.showRecentSpinner).toEqual(true);
  });

  it('should have a function, matchMedia', function() {
    expect(controller.mq).toBeDefined();
  });
})
