function customSwipe($swipe, $window) {
    return {
        restrict: 'A',
        scope: {
            posterLength: '=posterLength'
          },
        link: function(scope, element, attr) {

            var pointerTypes = ['touch','mouse'];
            var MAX_VERTICAL_DISTANCE = 75;
            var MAX_VERTICAL_RATIO = 0.3;
            var startCoords,
                valid,
                direction,
                endCoords,
                moveTriggerCount,
                posterDivWidth;
            var windowWidth = $window.matchMedia("(max-width: 992px)");
            var mobileWidth = $window.matchMedia("(min-width: 768px)");
            if (mobileWidth.matches) {
                posterDivwidth = 325;
            } else {
                posterDivwidth = 265;
            }

            function validSwipe(coords) {
                if (!startCoords) return false;
                var deltaY = Math.abs(coords.y - startCoords.y);
                direction = coords.x - startCoords.x;
                var deltaX = Math.abs(coords.x - startCoords.x);
                return valid &&
                    deltaY < MAX_VERTICAL_DISTANCE &&
                    deltaX > 0 &&
                    deltaY / deltaX < MAX_VERTICAL_RATIO &&
                    windowWidth.matches;
              }

            $swipe.bind(element, {
                'start': function(coords, event) {
                    startCoords = coords;
                    valid = true;
                    moveTriggerCount = 0;
                  },
                  'move': function(coords, event) {
                    moveTriggerCount += 1;
                    if (moveTriggerCount === 1) {
                        valid = true;
                        endCoords = coords;
                        if (validSwipe(endCoords) && direction > 0) {
                            var current = element.css('left');
                            if(current === "0px"){
                                return
                            }
                            current = current.slice(0, -2);
                            current = parseInt(current) + posterDivwidth;
                            element.css('left', current + 'px');
                        }
                        else if (validSwipe(endCoords) && direction < 0) {
                            var current = element.css('left');
                            var stopDistance = (-Math.abs(posterDivwidth * (scope.posterLength - 1)) + "px");
                            if(current === stopDistance){
                                return
                            }
                            current = current.slice(0, -2);
                            current = parseInt(current) - posterDivwidth;
                            element.css('left', current + 'px');
                        } else {
                        }
                    } else if (moveTriggerCount != 1) {
                        return
                    }
                  },
                  'cancel': function(event) {
                    valid = false;
                  },
                  'end': function(coords, event) {
                },
            }, pointerTypes)
        }
    }
}

angular
    .module('root')
    .directive('customSwipe', customSwipe);