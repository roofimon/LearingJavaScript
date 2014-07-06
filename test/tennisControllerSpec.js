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
        expect($scope.messages.length).toEqual(2);
        expect($scope.messages[0]).toEqual("French Open");
        expect($scope.messages[1]).toEqual("US Open");
    });
});
