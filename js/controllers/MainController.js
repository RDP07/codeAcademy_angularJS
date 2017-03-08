app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Books We Recommend';
  $scope.promo = 'Start your next reading adventure!';
  $scope.products = [
                      {
                      	name: 'The Book of Trees',
                      	price: 19,
                      	pubdate: new Date('2014', '03', '08'),
                      	cover: 'img/the-book-of-trees.jpg',
                      	likes: 0,
                      	dislikes:0
                      },
                      {
                      	name: "Program or be Programmed",
                      	price: 8,
                      	pubdate: new Date('2013', '08', '01'),
                      	cover: 'img/program-or-be-programmed.jpg',
                      	likes: 0,
                      	dislikes: 0
                      },
                      {
                      	name: 'HTML & CSS: Design and Build Websites',
                      	price: 8,
                      	pubdate: new Date('2011','11', '08'),
                      	cover: 'img/html-and-css.jpg',
                      	likes: 0,
                      	dislikes: 0
                      },
                      {
                      	name: 'JavaScript & JQuery: Interactive Front-End Web Development',
                      	price: 28,
                      	pubdate: new Date('2014', '06', '30'),
                      	cover: "img/javascript-and-jquery.jpg",
                      	likes: 0,
                      	dislikes: 0
                      }
                    ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
  };
}]);
