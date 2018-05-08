describe('Directive: Tweet Text Size', function() {
  var $compile;
  var $rootScope;

  beforeEach(module('root'));

  beforeEach(inject(function($injector){
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
  }));

  it('should return _____', function() {
    //
  });
});
