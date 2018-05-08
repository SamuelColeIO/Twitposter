function UrlInputController(PosterService, $state) {
    var $ctrl = this

    $ctrl.toggleButtonLoader = false;

    $ctrl.errors = [];

    $ctrl.postTweet = function () {
        $ctrl.toggleButtonLoader = true;
        PosterService.createPoster($ctrl.urlInput).then(function (tweet) {
            $state.go('create', {id: tweet.data.id_str, user: tweet.data.user.screen_name, data: tweet.data});
        }, function () {
            $ctrl.errors.push("Could not connect to Printing API");
        });
    };
}
angular
    .module("root")
    .controller("UrlInputController", UrlInputController);
