angular.module('root')
  .directive('tweetTextSize', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var textDivider = "";
        var currentTweetTextLength = scope.$ctrl.poster.tweetTextLength;
        if(currentTweetTextLength < 147) {
          textDivider = 16;
        }
        else if(currentTweetTextLength < 186) {
          textDivider = 17;
        }
        else if(currentTweetTextLength < 214) {
          textDivider = 18;
        }
        else if(currentTweetTextLength < 228) {
          textDivider = 19;
        }
        else if(currentTweetTextLength < 271) {
          textDivider = 20;
        }
        else {
          textDivider = 21;
        }
        var currentClientWidth = element[0].clientWidth;
        var tweetTextWidth = (currentClientWidth / textDivider);
        var tweetIdWidth = (currentClientWidth / 23);
        var tweetAtIdWidth = (currentClientWidth / 25);
        var tweetStatsWidth = (currentClientWidth / 25);
        var tweetText = element[0].getElementsByClassName("poster__tweet-text");
        var tweetId = element[0].getElementsByClassName("poster__poster-id");
        var tweetAtId = element[0].getElementsByClassName("poster__poster-atId");
        var tweetTime = element[0].getElementsByClassName("poster__post-time");
        var tweetRetweets = element[0].getElementsByClassName("poster__retweets");
        var tweetFavorites = element[0].getElementsByClassName("poster__favorites");
        tweetText[0].style.fontSize = (tweetTextWidth + 'px');
        tweetId[0].style.fontSize = (tweetIdWidth + 'px');
        tweetAtId[0].style.fontSize = (tweetAtIdWidth + 'px');
        tweetRetweets[0].style.fontSize = (tweetStatsWidth + 'px');
        tweetFavorites[0].style.fontSize = (tweetStatsWidth + 'px');
        tweetTime[0].style.fontSize = (tweetStatsWidth + 'px');
      }
    }
  });