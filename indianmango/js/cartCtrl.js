app.controller(
  "cartCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "http://localhost:9000/shop/";
    console.log(123465);
    let id = JSON.parse(localStorage.getItem("cartId"));
    console.log(id);
    console.log(12165);
    $scope.listcart = function (req, res) {
      $http
        .get(baseurl + `api/getcart/allCarts/${id}`)
        .success(function (res) {
          console.log(res);
          if (res.status == "false") {
          } else {
            $scope.carts = res.cartData;
            console.log(res.cartData);

            // itemName.innerHTML = $scope.cart.cartData[0][0].item_name;
          }
        })
        .error(function () {});
    };
    $scope.cartDelete = function (id) {
      let orgID = JSON.parse(localStorage.getItem("cartId"))
      console.log(orgID);

      console.log(baseurl);
      $scope.formvalidate = "true";
      console.log("New delete");
      console.log($scope.carts);
      $http
        .delete(baseurl + "api/remove/removeProduct" + id, $scope.carts)
        .success(function (res) {
          $scope.response = res;
          console.log(res);
          if (res.status == "false") {
            alert(res.message);
          } else {
            alert("org save Successfully deleted");
            // location.reload();
            //   $window.location = "org.html";
          }
        });
    };
  }
);
