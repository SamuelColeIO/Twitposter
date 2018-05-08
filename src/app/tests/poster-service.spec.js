describe('Service: Poster', function () {
  var PosterService;
  var $httpBackend;
  var dataReturned;

  beforeEach(module('root'));

  beforeEach(inject(function ($injector) {
    PosterService = $injector.get('PosterService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should return create-poster', inject(function ($rootScope) {
    PosterService.createPoster().then(function (data) {
      dataReturned = data.data[0].service;
    })
      .then(function () {
        expect(dataReturned).toEqual('create-poster');
      });
  }));

  it('should return get-popular-posters', inject(function ($rootScope) {
    PosterService.getPopularPosters().then(function (data) {
      dataReturned = data.data[0].service;
    })
      .then(function () {
        expect(dataReturned).toEqual('get-popular-posters');
      });
  }));

  it('should return get-recent-posters', inject(function ($rootScope) {
    PosterService.getRecentPosters().then(function (data) {
      dataReturned = data.data[0].service;
    })
      .then(function () {
        expect(dataReturned).toEqual('get-recent-posters');
      });
  }));
})
