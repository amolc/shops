var myApp = angular.module('myApp', []);

myApp.controller('FormController', ['$scope', function($scope) {
    $scope.register = function() {
        $scope.msg = 'Welcome' + $scope.user.firstname + '! You have signed in' ;
    }
    
}] );