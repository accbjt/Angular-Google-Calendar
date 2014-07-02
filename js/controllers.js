angular.module('myApp.controllers', [])
    .controller('FrameController', ['$scope', function($scope) {
        $scope.today = new Date (); // Today's Date
        $scope.name = "Ari Lerner"; // Today's Date
    }])
    .controller('DashboardController', ['$scope', function($scope) {

    }]);