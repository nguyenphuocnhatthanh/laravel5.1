<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Index</title>
	<link rel="stylesheet" href="">
</head>
<body ng-app="postsApp" ng-controller="PostsCtrl">
	<h1>Hello </h1>
	<div>
		@yield('content')
	</div>
	<footer>
		
	</footer>
	<script src="{{ asset('js/libs/angular.min.js')  }}" language="javascripts"></script>
	<script src="{{ asset('js/libs/angular-route.min.js')  }}"  language="javascripts"></script>
	<script src="{{ asset('js/libs/angular-sanitize.min.js')  }}"  language="javascripts"></script>
	@yield('scripts')
</body>
</html>