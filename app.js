var app = angular.module('app', ['firebase', 'ui.router', 'btford.markdown']);

app.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state("home", {
                url: "/",
                controller: "HomeCtrl",
                templateUrl: "home/home.html"
            }).state("admin", {
                url: "/admin",
                controller: "AdminCtrl",
                templateUrl: "admin/admin.html"
            }).state("edit", {
                url: "/edit/:postKey",
                controller: "EditCtrl",
                templateUrl: "admin/edit.html"
            }).state("post", {
                url: "/post/:postID",
                controller: "PostCtrl",
                templateUrl: "home/post.html"
            });            	
}]);