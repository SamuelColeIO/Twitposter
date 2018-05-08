var urlInputComponent = {
    templateUrl: '../component/url-input-component/url-input-component.html',
    bindings: {
        placeholder: '<'
    },
    controller: "UrlInputController"
};

angular
    .module('root')
    .component('urlInputComponent', urlInputComponent);