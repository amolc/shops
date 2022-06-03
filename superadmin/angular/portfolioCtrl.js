app.controller(
    "portfolioCtrl",
    function($scope, $http, $window, $location, $sce, $timeout, store) {

        if (document.location.hostname == "localhost") {
            var baseurl = "http://localhost:7000/";
        } else {
            var baseurl = "https://api.superadmin.shop/";
        }



        $scope.init = function(req, res) {

            alert("category");
        }

        $scope.list = function(req, res) {
            $http
                .get(baseurl + "api/portfolio/")

            .success(function(res) {
                    if (res.status == "false") {} else {
                        $scope.portfolios = res.data;
                        console.log("portfolio: ", $scope.portfolios);
                    }
                })
                .error(function() {});
        };

        $scope.redirect = function() {
            //console.log("redirect");
            location.href = "index.html";
        };



        $scope.add = function() {
            $scope.formvalidate = "true";
            //console.log("New Cars");
            console.log($scope.data);

            $http.post(baseurl + "portfolio/", $scope.data).success(function(res) {
                $scope.response = res;
                // console.log(res);
                if (res.status == "false") {
                    alert(res);
                } else {
                    alert("Portfolio  save Successfully");
                    $window.location = "category.html";
                }
                // }).error(function() {
                //         // alert("Please check your internet connection or data source..");
            });
        };

        //orderCtrl ends

        $scope.delete = function(id) {
            console.log(id);
            $scope.formvalidate = "true";
            console.log("New delete");
            // console.log($scope.data);
            $http
                .delete(baseurl + "category/" + id, $scope.data)
                .success(function(res) {
                    $scope.response = res;
                    console.log(res);
                    if (res.status == "false") {
                        alert(res.message);
                    } else {
                        alert("category save Successfully deleted");
                        location.reload();
                        //   $window.location = "category.html";
                    }
                });
        };

        $scope.update = function(id) {
            console.log(id);
            $scope.formvalidate = "true";
            console.log("New Cars", $scope.categories);
            const data = $scope.categories.filter((e) => e.id === id);
            console.log(data);
            $http
                .patch(baseurl + "category/" + id, $scope.data)
                .success(function(res) {
                    localStorage.setItem("data", JSON.stringify(data));
                    $window.location = `category-add.html?id=${id}`;
                });
        };
        $scope.ngOnInit = () => {};
    }
);