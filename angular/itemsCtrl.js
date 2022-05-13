app.controller('organizationCtrl', function($scope, $http, $window, $location, $sce, $timeout, store) {

    var baseurl = "/api/";

    $scope.data = {}
    $scope.givealert = function(req, res) {

        alert("I am alert");
    }

    $scope.init = function(req, res) {

        alert("items");
    }

    
    $scope.listorganization = function(req, res) {
        $http.get(baseurl + 'organization/')
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.supercategories = res.data;
                    console.log('categories: ', $scope.supercategories);
                }
            }).error(function() {});
    }


    $scope.addorganization = function(req, res) {

        alert("add organization");
        console.log($scope.data);
        $http.get(baseurl + 'addorganizationni/')
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.categories = res.data;
                    console.log('categories: ', $scope.categories);
                }
            }).error(function() {});
    }


    $scope.updateorganization = function(req, res) {
        $http.get(baseurl + 'category/')

        .success(function(res) {
            if (res.status == 'false') {} else {
                $scope.categories = res.data;
                console.log('categories: ', $scope.categories);
            }
        }).error(function() {});
    }

    $scope.redirect = function() {
        //console.log("redirect");
        location.href = 'index.html';
    }



    //orderCtrl ends
});