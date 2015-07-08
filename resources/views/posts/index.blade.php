@extends('app')
	
@section('content')
	<div ng-app="postsApp">
		<ul data-ng-controller="PostsCtrl">
			<li data-ng-repeat="post in posts">@{{post}}</li>
		</ul>
		<input type="text" ng-model="test" name="" value="" placeholder="">
		@{{ text }}
	</div>
@stop

@section('scripts')
	<script src="{{ asset('js/controllers/PostsController.js')  }}" language="javascripts"></script>
	<script src="{{ asset('js/services/PostsService.js')  }}" language="javascripts"></script>
	<script src="{{ asset('js/app.js')  }}" language="javascripts"></script>
@endsection