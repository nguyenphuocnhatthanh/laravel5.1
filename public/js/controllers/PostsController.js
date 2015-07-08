var modulePostController = angular.module('modulePostController', [], function($interpolateProvider){
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
});

modulePostController.controller('PostsCtrl', ['$scope', '$http', 'Post', function ($scope, $http, Post) {
	$scope.post = {};
	$scope.loading = true;
	Post.getAll().success(function(result) {
		$scope.posts = result;
		$scope.loading = false;
	});

	console.log($scope.posts);

	$scope.submitPost = function() {
		$scope.loading = true;
		Post.save($scope.post)
			.success(function(result){
				$scope.posts = result;
				$scope.loading = false;
			})
			.error(function(result){
				console.log(result);
			});
	};

	$scope.deletePost = function($id) {
		$scope.loading = true;
		Post.destroy
			.success(function(result) {
				Post.getAll()
					.success(function(data) {
						$scope.posts = data;
						$scope.loading = false;	
					});		
			})
			.error(function(result) {
				console.log(result);
			});
	};
}]);