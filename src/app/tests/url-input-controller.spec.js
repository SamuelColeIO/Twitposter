describe('Controller: Url Input', function() {
  var $componentController;
  var controller;

  beforeEach(module('root'));

  beforeEach(inject(function($injector) {
    $componentController = $injector.get('$componentController');
    controller = $componentController('urlInputComponent',
    { scope: {}}
  );
  }))

  it('should exist', function() {
    expect(controller).toBeDefined();
  });

  it('should have a function, postTweet', function() {
    expect(controller.postTweet).toBeDefined();
  });
})