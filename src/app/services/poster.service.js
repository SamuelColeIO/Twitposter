function PosterService($http, moment) {

    var service = this;

    service.createPoster = function (tweetLink) {
        return $http({
            method: 'POST',
            url: '/api/v1/get-tweet',
            data: {tweetId: tweetLink}
        }).then(function(tweet) {
            return tweet;
        }, function() {
            // handle error;
        });
    },
    service.getPoster = function (tweetId) {
        return $http({
            method: 'GET',
            url: '/api/v1/get-poster',
            params: {tweetId: tweetId}
        }).then(function(tweet) {
            return tweet;
        }, function() {
            // handle error;
        });
    },
    service.getPopularPosters = function () {
        return $http({
            method: 'GET',
            url: '/api/v1/get-popular'
        }).then(function(popularTweets) {
            return service.formatPosters(popularTweets.data);
        }, function() {
            // handle error
        }); 
    },
    service.formatPosters = function(tweets) {
        var formatted = [];
        angular.forEach(tweets, function(tweet) {
            formatted.push(service.formatPoster(tweet));
        })
        return formatted;
    },
    service.formatPoster = function(posterData) {
        var poster = {};
        poster.id = posterData.id;
        poster.twitId = posterData.user.name || null;
        poster.twitAtId = "@" + posterData.user.screen_name;
        poster.tweetTextLength = posterData.text.length;
        poster.twitText = posterData.text.replace(/(@\S+|#\S+|http\S+|https\S+|www\S+)/gi,"<span class='poster__tweet-text--link'>$1</span>");
        poster.twitDate = moment(posterData.created_at).format('MM/DD/YY, h:mm a');
        poster.twitTime = posterData.created_at;
        poster.twitRetweets = posterData.retweet_count;
        poster.twitFavorites = posterData.favorite_count;

        return poster;
    }
    service.getRecentPosters = function () {
        return $http({
            method: 'GET',
            url: '/api/v1/get-recent'
        }).then(function(recentTweets) {
            return service.formatPosters(recentTweets.data);
        }, function() {
            // handle error
        }); 
    }
};

angular.module('root')
    .service('PosterService', PosterService);