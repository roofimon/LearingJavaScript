'use strict';

describe('TennisController', function() {
    var $scope;
    beforeEach(function() {
        module("TennisApp");
        inject(createController);
    });

    function createController($rootScope, $controller){
        $scope = $rootScope.$new();
        $controller("TennisController", {$scope: $scope});
    };

    it('should declare TennisController', function(){
        expect($scope.hasError).toEqual(false);
        expect($scope.wine.title).toEqual("Waiting for a punch line");
    });

});
