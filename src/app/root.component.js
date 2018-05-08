var root = {
    templateUrl: 'root.html',
    controller: 'RootController'
};

angular
.module('root', ["ui.router" , "ngTouch", "ngFitText", "angularMoment"])
.component('root', root);