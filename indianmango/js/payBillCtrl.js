app.controller(
  "payBillCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "http://localhost:9000/shop/";

    $scope.listpayBill = function () {
      $scope.getFormData = function () {
        var full_name = document.getElementById("full_name").value;

        var user_address = document.getElementById("user_address").value;
        var zipcode = document.getElementById("user_post_code").value;
        var user_city = document.getElementById("user_city").value;
        var user_country = document.getElementById("user_country").value;
        var card_number = document.getElementById("card-number").value;
        var card_expiry = document.getElementById("card-expiry").value;
        var card_cvc = document.getElementById("card-cvc").value;
        var id = JSON.parse(localStorage.getItem("cartId"));
        console.log(id);
          console.log(full_name);
          console.log(user_address);
          console.log(zipcode);
          console.log(user_city);
          console.log(user_country);
          console.log(card_number);
          console.log(card_expiry);
          console.log(card_cvc);
          console.log(12346);

        var formData = {
          fullName: full_name,
          address: user_address,
          zipCode: zipcode,
          city: user_city,
          country: user_country,
          cardNumber: card_number,
          expiryDate: card_expiry,
          cardCode: card_cvc,
          cartID: id,
        };
        $http
          .post(baseurl + "/api/bill/payBill", formData)
          .success(function (res) {
            if (res.status == "false") {
              console.log("if");
            } else {
              $scope.payBill = res;
              console.log($scope.payBilles);
              console.log("else");
            }
          })
          .error(function () {});
      };
      console.log(12231456);
    };
  }
);
