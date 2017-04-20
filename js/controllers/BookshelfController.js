app.controller('BookshelfController', ['$scope','books', function($scope, books) {
	books.success(function(data){
    return $scope.myBooks = data;
  });
}]);