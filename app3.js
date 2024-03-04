var app = angular.module('electionApp', []);

app.controller('ElectionController', function($scope) {
    $scope.electionResults = [
        { year: 1952, party: 'Congress', seats: 364, analysis: 'Historic win for Congress.' },
        // Add more election results as needed
    ];
});