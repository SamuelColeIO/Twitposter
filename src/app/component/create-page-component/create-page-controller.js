function CreateController(OrderService, PosterService, $state, moment) {

    var $ctrl = this;
    var spinnerCounter = 0;
    $ctrl.errors = [];
    $ctrl.currentPrice = '$25';

    $ctrl.showPopularLoader = true;
    $ctrl.showRecentLoader = true;
    $ctrl.showLargePosterLoader = true;
    $ctrl.showWallPosterLoader = true;

    if(!$state.params.data && $state.params.id) {
        PosterService.getPoster($state.params.id).then(function(tweet) {
            $ctrl.posterData = tweet.data;
            mapPoster($ctrl.posterData);
        }, function() {
            $ctrl.errors.push("No such poster exists");
        });
    } else if ($state.params.data) {
        mapPoster($state.params.data);
    }


    var handler = StripeCheckout.configure({
        locale: 'auto',
        token: function (token) {
            OrderService.makePayment(token).then(function(res) {
                console.log(res);
            }, function() {
                console.log("error ordering");
            });
        }
    });

    $ctrl.buyPoster = function() {
        handler.open({
            name: 'Twitposter',
            description: '1 Poster',
            amount: 2500
        });
    } 

    $ctrl.createAnother = function () {
        alert("create new");
    };

    PosterService.getPopularPosters().then(function (response) {
        //hide loading spinner
        $ctrl.showPopularLoader = false;
        $ctrl.popularPosters = response;

    }, function () {
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

    function mapPoster(posterData) {
        $ctrl.poster = {};
        $ctrl.poster.id = posterData.id;
        $ctrl.poster.twitId = posterData.user.name || null;
        $ctrl.poster.twitAtId = "@" + posterData.user.screen_name;
        $ctrl.poster.tweetTextLength = posterData.text.length;
        $ctrl.poster.twitText = posterData.text.replace(/(@\S+|#\S+|http\S+|https\S+|www\S+)/gi,"<span class='poster__tweet-text--link'>$1</span>");
        $ctrl.poster.twitDate = moment(posterData.created_at).format('MM/DD/YY, h:mm a');
        $ctrl.poster.twitRetweets = posterData.retweet_count;
        $ctrl.poster.twitFavorites = posterData.favorite_count;
        $ctrl.showLargePosterLoader = false;
    };
}

angular
    .module("root")
    .controller("CreateController", CreateController);