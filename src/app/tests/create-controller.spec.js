describe('Controller: Create', function() {
  var $componentController;
  var controller;

  beforeEach(module('root'));

  beforeEach(inject(function($injector) {
    $componentController = $injector.get('$componentController');
    controller = $componentController('create',
    { scope: {}}
  );
  }))

  it('should exist', function() {
    expect(controller).toBeDefined();
  })

  it('should have a current price of $19', function() {
    expect(controller.currentPrice).toEqual('$19');
  });

  it('should have a function, buyPoster', function() {
    expect(controller.buyPoster).toBeDefined();
  });

  it('should have a function, createAnother', function() {
    expect(controller.createAnother).toBeDefined();
  });
  
  it('should have an array, popularPosters, with a length of 8', function() {
    expect(controller.popularPosters.length).toEqual(8);
  });

  it('should have an array, recentPosters, with a length of 4', function() {
    expect(controller.recentPosters.length).toEqual(4);
  });
    
})
