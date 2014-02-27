angular.module('recognition', ['ngResource']);

function SayWowController($scope, $resource) {
    $scope.model = {};
    $scope.predicate = 'message';
    $scope.reverse = true;
    var Recognitions = $resource('messages', {}, {isArray: true});

    console.log('querying ...');

    var recognitionList = Recognitions.query();

    console.log("calling get ...");

    recognitionList.$promise.then(function(result) {
        console.log('resolving ...');

        $scope.model.result = result;
        console.log(result);
        console.log(result[0].message);
    });
    $scope.submit = function () {

        console.log('@@@submitting ...');
        Recognitions.save({message: $scope.tweet});
        recognitionList = Recognitions.query();

        console.log("calling get ...");

        recognitionList.$promise.then(function(result) {
            console.log('resolving ...');

            $scope.model.result = result;
            console.log(result);
            console.log(result[0].message);
        });
    };
}