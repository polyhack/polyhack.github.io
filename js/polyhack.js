var Poly = angular.module('poly', []);

Poly.factory('users', function () {
    return [
        { "github" : "markmandel", "nick" : "[Neurotic]", "lang" : "Go, Clojure, J/Ruby" },                                          
        { "github" : "kvanberendonck", "nick" : "Aetherspawn", "lang" : "Haskell, C, C++" },
        { "github" : "andrebuchanan", "nick" : "andrebuchanan", "lang" : "Node.js" },
        { "github" : "aussiegeek", "nick" : "aussiegeek", "lang" : "Ruby, Go" },
        { "github" : "mwotton", "nick" : "blackdog", "lang" : "Haskell, Ansible, not-Javascript, not-Go." },
        { "github" : "bulkan", "nick" : "bulkan", "lang" : "Node.js" },
        { "github" : "cgiffard", "nick" : "cgiffard", "lang" : "Node.js, Erlang" },
        { "github" : "damncabbage", "nick" : "damncabbage", "lang" : "Ruby, Javascript, not-PHP, attempted Haskell." },
        { "github" : "deoxxa", "nick" : "deoxxa", "lang" : "Node.js, C" },
        { "github" : "eugeneware", "nick" : "eugeneware", "lang" : "Node.js" },
        { "github" : "joshwnj", "nick" : "joshwnj", "lang" : "Node.js, PHP" },
        { "github" : "michaelneale", "nick" : "michaelneale", "lang" : "Erlang, Clojure, Scala, Bash, Haskell, Go, Javascript." },
        { "github" : "nicholasf", "nick" : "nicholasf", "lang" : "Elixir, Javascript, post Ruby, post Java." },
        { "github" : "ocke", "nick" : "ocke", "lang" : "Javascript, PHP" },
        { "github" : "pomke", "nick" : "pomke", "lang" : "Javascript, Python" },
        { "github" : "rkstedman", "nick" : "rkstedman", "lang" : "Node.js" },
        { "github" : "robzolkos", "nick" : "robzolkos", "lang" : "Ruby, Node.js, Javascript, Go" },
        { "github" : "rvagg", "nick" : "rvagg", "lang" : "Node.js" },
        { "github" : "SomeoneWeird", "nick" : "SomeoneWeird", "lang" : "Javascript, Go" },
        { "github" : "sporto", "nick" : "sporto", "lang" : "Javascript, Ruby, Go" },
        { "github" : "timoxley", "nick" : "timoxley", "lang" : "Node.js" },
        { "github" : "yangwao", "nick" : "wao-ender", "lang" : "Node.js" },
        { "github" : "wolfeidau", "nick" : "wolfeidau", "lang" : "Bash, Go, Javascript, C, C++, HTML, CSS." }
    ];
});

Poly.controller('UserListController', function($scope, $http, $q, users) {
    $scope.details = {};
    $scope.users = users;
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
