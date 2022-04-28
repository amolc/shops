app.controller(
  "cartCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "http://localhost:9000/shop/";
    console.log(123465);
    let id = JSON.parse(localStorage.getItem("cartId")) ;
    console.log(id);
    console.log(12165);
    $scope.listcart = function (req, res) {
      $http
        .get(baseurl + `api/getcart/allCarts/${id}`)
        .success(function (res) {
          if (res.status == "false") {
          } else {
            $scope.carts = res.cartData;
            console.log(res.cartData)


            // itemName.innerHTML = $scope.cart.cartData[0][0].item_name;
          }
        })
        .error(function () {});
    };
  }
);
