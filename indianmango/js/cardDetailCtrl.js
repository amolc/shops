app.controller(
  "cardDetailCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "http://localhost:9000/shop/";

    $scope.listcardDetail = function (req, res) {
      const data = JSON.parse(localStorage.getItem("itemDetails"));
      console.log(data);
      let itemTitle = document.getElementById("itemTitle");
      let itemPrice = document.getElementById("itemPrice");
      let itemDescription = document.getElementById("itemDescription");
      let productQuantity = document.getElementById("product-quantity");

      itemTitle.innerHTML = data.item_title;
      itemDescription.innerHTML = data.item_description;
      itemPrice.innerHTML = data.item_price;
      productQuantity.value = data.item_quantity;
      //   console.log(124475);
    };
    $scope.addtoCart = function () {
      let id = JSON.parse(localStorage.getItem("org_id"));
      console.log(id);
      $http
        .post(baseurl + "api/cart/addToCart", JSON.stringify({ productID: id }))
        .success(function (res) {
            console.log(res);
          if (res.status == "false") {
            // console.log(1346);
          } else {
            id = res.cartID;

            console.log(res);
            localStorage.setItem("cartId", JSON.stringify(id));
            // console.log($scope.listcardDetail);

            // console.log(789789);
            window.location.assign("cart.html");
          }
        })
        .error(function () {});
    };
  }
);
