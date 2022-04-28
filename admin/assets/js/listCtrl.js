app.controller(
  "listCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {

    $scope.list = function (req, res) {
        // console.log(123465);
        const data = JSON.parse(localStorage.getItem("itemDetails"))

        console.log(data);
        $scope.list = data
        console.log($scope.list.item_name);
    }

  }
);
