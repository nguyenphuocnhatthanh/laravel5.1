var PostApp = angular.module('postsApp', ['modulePostController', 'PostsService'], function($interpolateProvider){
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');