app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Books We Recommend';
  $scope.promo = 'Start your next reading adventure!';
  $scope.product = {
    name: 'The Book of Trees',
    price: 19
                   };
}]);
