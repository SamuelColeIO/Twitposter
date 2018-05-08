angular
  .module("root")
  .filter('passHtmlString', function($sce) {
    return $sce.trustAsHtml;
  });