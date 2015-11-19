app.controller('HomeCtrl', ['$scope', '$firebaseArray', 
	function($scope, $firebaseArray){
	var ref = new Firebase('https://brl-blog-demo.firebaseio.com/blog/posts/');
	var postsArr = $firebaseArray(ref);
	$scope.posts = postsArr;
}]);

app.controller('PostCtrl', ['$scope', function($scope){
	var ref = new Firebase('https://brl-blog-demo.firebaseio.com/blog/posts/');
	var query = ref.orderByChild('postID').equalTo($scope.$stateParams.postID);
	query.once('value', function(snapshot){
		snapshot.forEach(function(child){
			$scope.post = child.val();
			$scope.$apply();
		})
	})
}])