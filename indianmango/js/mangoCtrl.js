app.controller(
  "mangoCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "http://localhost:9000/shop/";
    // console.log("Mangoose");
    $scope.listmango = function (req, res) {
      $http
        .get(baseurl + "api/item/allItems")
        .success(function (res) {
          // console.log(res[0].item_picture.data[0]);
          if (res.status == "false") {
          } else {
            $scope.mangoes = res;
            console.log($scope.mangoes);
          }
        })
        .error(function () {});
    };

    $scope.mangoFind = function (id) {
      var org_0id = id;
      localStorage.setItem("org_id", JSON.stringify(org_0id));
      $scope.mangoes.map((eachObj, index) => {
        if (eachObj.org_id == id) {
          // console.log(eachObj.item_price);
          let data = eachObj;
          // console.log(data.item_price);
          let product_price = document.getElementById("product-price");
          // console.log(product_price);
          let product_description = document.getElementById(
            "product_description"
          );

          product_price.innerHTML = data.item_price;
          product_description.innerHTML = data.item_description;
          console.log(121453);
        }
      });

      // item_description[id];
    };

    // $scope.addtoCart = function () {
    //   // console.log(org_id);

    //   // console.log(id);

    //   let id = JSON.parse(localStorage.getItem("org_id"));
    //   console.log(id);
    //   $http
    //     .post(baseurl + "api/cart/addToCart", JSON.stringify({ productID: id }))
    //     .success(function (res) {
    //       if (res.status == "false") {
    //         // console.log(1346);
    //       } else {
    //         id = res.cartID;

    //         console.log(res);
    //         localStorage.setItem("cartId", JSON.stringify(id));
    //         console.log($scope.cart);

    //         // console.log(789789);
    //         alert(res.msg);
    //       }
    //     })
    //     .error(function () {});
    // };

    $scope.cart = function () {
      window.location.assign("./cart.html");
    };

    $scope.saveDataToShowDetails = function (id) {
      let org_0id = id;
      localStorage.setItem("org_id", JSON.stringify(org_0id))

      const data = $scope.mangoes[id - 1];
      console.log(data);
      localStorage.setItem("itemDetails", JSON.stringify(data));
    };
  }
);
