// the app module
var mainApp = angular.module('mainApp', ['ui.router']);

	// configured routes
	mainApp.config(function($stateProvider,$httpProvider) {
		$stateProvider

			.state('home',{
		        url:'/',
				templateUrl : 'views/home.tpl.html',
				controller  : 'homeController'
		    })

			.state('posts',{
		        url:'/posts',
				templateUrl : 'views/posts.tpl.html',
				controller  : 'postsController'
		    });

  	})
  	.run(function($state){
    	$state.go('home');
  	});

	mainApp.controller('homeController',function($scope,$state){
	    $scope.title = 'My Home';
	     $scope.description = 'This is my home.';
	});

	mainApp.controller('postsController',function($scope,$state){
	    $scope.title = 'My Posts';
	     $scope.description = 'These are my posts.';
	});