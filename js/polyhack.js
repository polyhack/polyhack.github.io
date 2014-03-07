var Poly = angular.module('poly', []);

Poly.controller('UserListController', function($scope, $http, $q) {

    $http.get('./js/users.json').then(function(res) {
        $scope.details = {};
        $scope.users = res.data;
        var git = [];
        angular.forEach($scope.users, function(u) {
            git.push($http.get('https://api.github.com/users/'+u.github));
        });
        $q.all(git).then(function(res) {
            angular.forEach(res, function(item) {
                $scope.details[item.data.login] = item.data;
            });
        });
    });
});
