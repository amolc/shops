app.controller('spurconnectCtrl', function($scope, $http, $window, $location, $sce, $timeout, store) {


    // var baseurl = "https://api.superadmin.shop/api/";

    var baseurl = "http://localhost:7000/api/";


    // $scope.data = {};

    $scope.listcategories = function(req, res) {

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


    //***************************************************************************************


    $scope.createuser = function(req, res) {

        $scope.formvalidate = "true";
        //console.log("New Cars");
        console.log($scope.data);

        $http.post(baseurl + 'spurusers/register', $scope.data).success(function(res) {
            $scope.response = res;
            console.log(res);
            if (res.status == 'error') {
                console.log(res.status.data);
            } else {
                // alert("Spurusers save Successfully");
                // $window.location = "index.html";
            }
            // }).error(function() {
            //         // alert("Please check your internet connection or data source..");
        });
    }


    $scope.login = function(req, res) {
        $scope.formvalidate = "true";
        console.log($scope.data);
        $http.post(baseurl + 'spurusers/login', $scope.data).success(function(res) {
            $scope.response = res;
            console.log(res);
            if (res.status == 'error') {
                console.log(res.status.data);
            } else {
                console.log(res.status.data);
                $window.location = "dashboard.html";
            }
        });
    }

});