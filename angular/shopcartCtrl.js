app.controller('shopcartCtrl', function($scope, $http, $window, $location, $sce, $timeout, store) {

    if (document.location.hostname == "localhost") {
        $scope.baseurl = "http://localhost:7000/api/";
    } else {
        $scope.baseurl = "https://api.superadmin.shop/api/";
    }

    $scope.data = {}
    $scope.givealert = function(req, res) {

        alert("I am alert");
    }

    $scope.init = function(req, res) {


    }

    $scope.list = function(req, res) {
        $http.get($scope.baseurl + 'items/')
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.dataset = res.data;
                    console.log('dataset: ', $scope.dataset);
                }
            }).error(function() {});
    }


    $scope.add = function(req, res) {

        alert($scope.data.thumbnail);

        console.log($scope.data);
        if ($scope.data.id != "") {
            $http.put($scope.baseurl + 'items/', $scope.data)
                .success(function(res) {
                    if (res.status == 'false') {} else {
                        $scope.response = res.data;
                        console.log('message: ', $scope.response);
                        window.location.reload();
                    }
                }).error(function() {});
        }
        $http.post($scope.baseurl + 'items/', $scope.data)
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.response = res.data;
                    console.log('message: ', $scope.response);
                    window.location.reload();
                }
            }).error(function() {});

    }


    $scope.update = function(id) {
        $http.get($scope.baseurl + 'items/' + id)
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.data = res.data;
                    console.log('data: ', $scope.data);
                }
            }).error(function() {});
    }

    $scope.delete = function(id) {
        $http.delete($scope.baseurl + 'items/' + id)
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.response = res.data;
                    console.log('data: ', $scope.response);
                }
            }).error(function() {});
        $window.location.reload();
    }

    $scope.openmodal = function(id) {

        $http.get($scope.baseurl + 'items/' + id)
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.detail = res.data;
                    $scope.detail.qty = 1
                    console.log('data: ', $scope.detail);
                }
            }).error(function() {});
    }

    $scope.addcart = function(id, name, price, qty) {

        cart = {}

        cart.id = id
        cart.name = name
        cart.price = price
        cart.qty = qty

        localStorage.setItem('items', JSON.stringify(cart));

        window.location.assign("./cart.html");

    }

    $scope.cartlist = function() {

        cart = localStorage.getItem('items');
        $scope.cart = JSON.parse(cart);
        console.log($scope.cart);

    }





    $scope.redirect = function() {
        //console.log("redirect");
        location.href = 'index.html';
    }


    $scope.updateattachment = function() {
        console.log('yes');
        var img = new Image();
        var newfile = document.getElementById("file_browse").files[0];
        var fileDisplayArea = document.getElementById('fileDisplayArea');
        var imageType = /image.*/;
        if (newfile.type.match(imageType)) {
            var oFReader = new FileReader();
            oFReader.onload = function(oFREvent) {
                $scope.data.thumbnail = document.getElementById("file_browse").files[0].name;
                console.log($scope.data.thumbnail);
                $scope.data.thumbnailimage = oFReader.result;
                console.log($scope.data.thumbnailimage);
                $scope.$apply();

            };
            oFReader.readAsDataURL(newfile);
            console.log($scope.data);
        } else {
            $scope.item.item_imagename = '';
            $scope.item.item_image = '';
        }
    };


    $scope.addorder = function(req, res) {



        console.log($scope.data);

        if ($scope.data.id != "") {
            $http.put($scope.baseurl + 'items/', $scope.data)
                .success(function(res) {
                    if (res.status == 'false') {} else {
                        $scope.response = res.data;
                        console.log('message: ', $scope.response);
                        window.location.reload();
                    }
                }).error(function() {});
        }
        $http.post($scope.baseurl + 'items/', $scope.data)
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.response = res.data;
                    console.log('message: ', $scope.response);
                    window.location.reload();
                }
            }).error(function() {});

    }



    //orderCtrl ends
});