(function () {
    'use strict';

    var footerComponent = {
        templateUrl: '../component/footer-component/footer-component.html',
        bindings: {}
    };

    angular
        .module('root')
        .component('footerComponent', footerComponent);
})();

