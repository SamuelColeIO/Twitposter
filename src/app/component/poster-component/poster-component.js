var poster = {
    scope: {},
    templateUrl: '/component/poster-component/poster.html',
    bindings: {
        poster: '='
    }
};

angular
    .module('root')
    .component('poster', poster);