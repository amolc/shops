app.controller(
  "cartCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "http://localhost:9000/shop/";
// console.log(12165);
    $scope.listcart = function (req, res) {
      $http
        .post(baseurl + "api/cart/addToCart")
        .success(function (res) {
          if (res.status == "false") {
          } else {
            $scope.cart = res;
            console.log($scope.cart);
          }
        })
        .error(function () {});
    };
  }
);
