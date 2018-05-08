function PosterTestController(PosterService) {
    var $ctrl = this;

    //all mocked data for large test poster
    $ctrl.poster = [];
    $ctrl.poster.twitId = 'kayne';
    $ctrl.poster.twitId = '50cent';
    $ctrl.poster.twitAtId = '@50cent';
    $ctrl.poster.twitText = 'I can\'t belive my grand mothers making me take Out the garbage I\'m rich as fuck this i\'m going home I don\'t need this shit';
    $ctrl.poster.twitDate = '8/26/10';
    $ctrl.poster.twitTime = '11:56 AM';
    $ctrl.poster.twitRetweets = '228K';
    $ctrl.poster.twitFavorites = '174K';

}


angular
    .module("root")
    .controller("PosterTestController", PosterTestController);