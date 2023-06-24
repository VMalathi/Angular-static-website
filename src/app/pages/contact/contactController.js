app.controller('contactController', function($http, $scope) {
    $scope.submitForm = function() {
      $http.post('/contact', {
        name: $scope.name,
        email: $scope.email,
        message: $scope.message
      }).then(function(response) {
        console.log(response.data);
      }).catch(function(error) {
        console.error(error);
      });
    };
  });