//
app.controller(
  "mangoCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "http://localhost:9000/shop/";
    // console.log("Mangoose");
    $scope.listmango = function (req, res) {
      $http
        .get(baseurl + "api/item/allItems")
        .success(function (res) {
          console.log(res[0].item_picture.data[0]);
          if (res.status == "false") {
          } else {
            $scope.mangoes = res;
            console.log($scope.mangoes);
          }
        })
        .error(function () {});
    };

    $scope.mangoFind = function (id) {
      console.log(id);
      console.log($scope.mangoes[2]);
      $scope.mangoes.map((eachObj, index) => {
        // console.log(eachObj);
        if (eachObj.org_id == id) {
          console.log(id);
          console.log(eachObj.org_id);
          console.log(eachObj);
        }
      });

      // item_description[id];
    };
  }
);
