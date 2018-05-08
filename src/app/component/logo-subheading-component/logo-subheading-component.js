var logoSubheadingComponent = {
    templateUrl: '../component/logo-subheading-component/logo-subheading-component.html',
    bindings: {
        subheadingToggle: '<'
    },
    controller: "LogoSubheadingController"
};

angular
    .module('root')
    .component('logoSubheadingComponent', logoSubheadingComponent);