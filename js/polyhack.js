var Poly = angular.module('poly', []);

Poly.factory('users', function () {
    return [
        { "github" : "markmandel", "nick" : "[Neurotic]", "lang" : "Go, Clojure, J/Ruby" },                                          
        { "github" : "kvanberendonck", "nick" : "Aetherspawn", "lang" : "Haskell, C, C++" },
        { "github" : "andrebuchanan", "nick" : "andrebuchanan", "lang" : "Node.js" },
        { "github" : "aussiegeek", "nick" : "aussiegeek", "lang" : "Ruby, Go" },
        { "github" : "bamse16", "nick" : "bamse16", "lang" : "Javascript, Node.js, Objective-C" },
        { "github" : "mwotton", "nick" : "blackdog", "lang" : "Haskell, Ansible, not-Javascript, not-Go." },
        { "github" : "bulkan", "nick" : "bulkan", "lang" : "Node.js" },
        { "github" : "Curiad", "nick" : "Curia", "lang" : "HTML, CSS, Javascript" },
        { "github" : "cgiffard", "nick" : "cgiffard", "lang" : "Node.js, Erlang" },
        { "github" : "damncabbage", "nick" : "damncabbage", "lang" : "Ruby, Javascript, not-PHP, Haskell." },
        { "github" : "deoxxa", "nick" : "deoxxa", "lang" : "Node.js, C" },
        { "github" : "eugeneware", "nick" : "eugeneware", "lang" : "Node.js" },
        { "github" : "joshwnj", "nick" : "joshwnj", "lang" : "Node.js, PHP" },
        { "github" : "markdalgleish", "nick" : "markdalgleish", "lang" : "Javascript, Node.js, HTML, CSS" },
        { "github" : "michaelneale", "nick" : "michaelneale", "lang" : "Erlang, Clojure, Scala, Bash, Haskell, Go, Javascript." },
        { "github" : "MiracleBlue", "nick" : "MiracleBlue", "lang" : "HTML, CSS, Node.js, JavaScript." },
        { "github" : "ocke", "nick" : "ocke", "lang" : "Javascript, PHP" },
        { "github" : "pomke", "nick" : "pomke", "lang" : "Javascript, Python" },
        { "github" : "rkstedman", "nick" : "rkstedman", "lang" : "Node.js" },
        { "github" : "robzolkos", "nick" : "robzolkos", "lang" : "Ruby, Node.js, Javascript, Go" },
        { "github" : "rvagg", "nick" : "rvagg", "lang" : "Node.js" },
        { "github" : "SomeoneWeird", "nick" : "SomeoneWeird", "lang" : "Javascript, Go" },
        { "github" : "sporto", "nick" : "sporto", "lang" : "Javascript, Ruby, Go" },
        { "github" : "thepatrick", "nick": "thepatr1ck", "lang": "Javascript, Objective-C, Swift, Ruby, not-Java." },
        { "github" : "timoxley", "nick" : "timoxley", "lang" : "Node.js" },
        { "github" : "yangwao", "nick" : "wao-ender", "lang" : "Node.js" },
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
