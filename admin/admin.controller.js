app.controller('AdminCtrl', ['$scope', '$firebaseArray', 
	function($scope, $firebaseArray){
	
	var ref = new Firebase('https://brl-blog-demo.firebaseio.com/blog/posts/');
	var adminPostsArr = $firebaseArray(ref);
	$scope.posts = adminPostsArr;

	$scope.createPost = function(){
		if($scope.data.newPostID){
			adminPostsArr.$add({ 
				postID: $scope.data.newPostID, 
				createDate: Firebase.ServerValue.TIMESTAMP }).then(function(newPost){
					$scope.$state.go('edit', {postKey: newPost.key()})
			});
		}
	}
    $scope.deletePost = function(post){
    	adminPostsArr.$remove(post)
    }
}])

app.controller('EditCtrl', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
	var ref = new Firebase('https://brl-blog-demo.firebaseio.com/blog/posts/');
    var postObj = $firebaseObject(ref.child($scope.$stateParams.postKey));
    postObj.$bindTo($scope, 'post');
}])