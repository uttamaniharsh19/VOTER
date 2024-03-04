angular.module('voterRegistrationApp', [])
    .controller('registrationController', function ($scope) {
        $scope.user = {};
        $scope.showConfirmation = false;

        $scope.submitForm = function () {
            // Perform form submission logic here

            // For demonstration purposes, just set showConfirmation to true
            $scope.showConfirmation = true;

            console.log('Form submitted:', $scope.user);
            // You may want to send data to a server or perform other actions
        };
    });