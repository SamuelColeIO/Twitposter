function LandingController(PosterService) {
    var $ctrl = this;
    var spinnerCounter = 0;

    $ctrl.popularErrors = [];
    $ctrl.recentErrors = [];

    //show loading spinner
    $ctrl.showPopularLoader = true;
    $ctrl.showRecentLoader = true;

    //determine whether to show 'track order' button on load
    $ctrl.mq = window.matchMedia("(max-width: 768px)");
    if ($ctrl.mq.matches) {
        $ctrl.showTrackOrderButton = false;
    } else {
        $ctrl.showTrackOrderButton = true;
    }

    //poster service
    PosterService.getPopularPosters().then(function (response) {
        //hide loading spinner
        $ctrl.showPopularLoader = false;
        $ctrl.popularPosters = response;
    }, function (error) {
        $ctrl.popularErrors.push("Could not connect to poster database");
    });

    //recent poster service
    PosterService.getRecentPosters().then(function (response) {
        //hide loading spinner
        $ctrl.showRecentLoader = false;
        $ctrl.recentPosters = response;
    }, function () {
        $ctrl.recentErrors.push("Could not connect to poster database");
    });
}

angular
    .module("root")
    .controller("LandingController", LandingController);