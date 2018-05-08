describe('Routes', function () {
  var $state;

  beforeEach(module('root'));

  beforeEach(inject(function ($injector) {
    $state = $injector.get('$state');
  }));

  describe('Landing Page', function () {
    var state;

    it('should have the correct url', function () {
      state = $state.get('landing');

      expect(state.url).toEqual('/');
    });
  });

  describe('Confirmation Page', function () {
    var state;

    it('should have the correct url', function () {
      state = $state.get('confirmation');

      expect(state.url).toEqual('/confirmation');
    });
  });


  describe('Contact Page', function () {
    var state;

    it('should have the correct url', function () {
      state = $state.get('contact');

      expect(state.url).toEqual('/contact');
    });
  });
  
  describe('Order Tracking Page', function () {
    var state;

    it('should have the correct url', function () {
      state = $state.get('orderTracking');

      expect(state.url).toEqual('/order-tracking');
    });
  });

  describe('Privacy Policy Page', function () {
    var state;

    it('should have the correct url', function () {
      state = $state.get('privacyPolicy');

      expect(state.url).toEqual('/privacy-policy');
    });
  });
  
  describe('Terms and Conditions Page', function () {
    var state;

    it('should have the correct url', function () {
      state = $state.get('termsAndConditions');

      expect(state.url).toEqual('/terms-and-conditions');
    });
  });

})