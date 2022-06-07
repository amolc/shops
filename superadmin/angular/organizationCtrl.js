app.controller('organizationCtrl', function($scope, $http, $window, config) {

    console.log("org data");
    console.log(config);

    $scope.data = {}

    var login = this;

    login.islogin = function() {
        alert("islogin");
        var islogin = localStorage.getItem('islogin');
        console.log(islogin); // gettin
        alert(islogin);
        if (islogin == '1') {} else {
            console.log("we aere in the else loop. debug moere.. ")
            location.href = 'dashboard.html';
        }


    }



    $scope.init = function(req, res) {
        var confirmlogin = login.islogin();

        console.log(config.baseurl);

    }

    $scope.list = function(req, res) {
        console.log(config.baseurl);
        $http.get(config.baseurl + 'org/')
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.dataset = res.data;
                    console.log('dataset: ', $scope.dataset);
                }
            }).error(function() {});
    }


    $scope.add = function(req, res) {

        console.log($scope.data);

        if (typeof $scope.data.id == 'undefined') {
            alert($scope.data.id);
            $http.post(config.baseurl + 'org/', $scope.data)
                .success(function(res) {
                    if (res.status == 'false') {} else {
                        $scope.response = res.data;
                        console.log('message: ', $scope.response);
                        window.location.reload();
                    }
                }).error(function() {});

        } else {

            alert($scope.data.id);
            $http.patch(config.baseurl + 'org/', $scope.data)
                .success(function(res) {
                    if (res.status == 'false') {} else {
                        $scope.response = res.data;
                        console.log('message: ', $scope.response);
                        window.location.reload();
                    }
                }).error(function() {});
        }


    }


    $scope.update = function(id) {
        $http.get(config.baseurl + 'org/' + id)
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.data = res.data;
                    console.log('data: ', $scope.data);
                }
            }).error(function() {});
    }

    $scope.delete = function(id) {
        $http.delete(config.baseurl + 'org/' + id)
            .success(function(res) {
                if (res.status == 'false') {} else {
                    $scope.response = res.data;
                    console.log('data: ', $scope.response);
                }
            }).error(function() {});
        $window.location.reload();
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

    $scope.login = function() {
        console.log($scope.data);
        $http.post(config.baseurl + 'org/login', $scope.data)
            .success(function(response, status, headers, config) {

                if (response.status === "passworderror") {
                    $scope.message = response.msg;
                    $scope.validatepassword = "1";
                    console.log($scope.message);
                } else if (response.status === "emailerror") {
                    $scope.message = response.msg;
                    $scope.validateemail = "1";
                    console.log($scope.message);
                } else {
                    console.log(response.data);
                    localStorage.setItem('islogin', '1'); // setting
                    localStorage.setItem('name', response.data.name);
                    localStorage.setItem('email', response.data.email);
                    localStorage.setItem('org_id', response.data.org_id);
                    $window.location = "dashboard.html";
                }


            }).error(function() {});

    };

});