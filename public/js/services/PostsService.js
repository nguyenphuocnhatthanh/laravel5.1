angular.module('PostsService', [])
	.factory('Post', ['$http', function ($http) {
		return {
			getAll : function() {
				return $http.get('/getall');
			},
			save : function(post) {
				return $http.post('post', post);
			},
			destroy : function(id) {
				return $http.delete('/post/delete/'+id);
			}
		};
	}]);	