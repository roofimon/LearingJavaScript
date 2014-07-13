'use strict';
describe('Wine Service', function() {
    var $backEnd, mockCallback, mockService;
    beforeEach( function() {
        module('TennisApp');
        inject(createService);
    });

    function createService($httpBackend, wineService) {
        $backEnd = $httpBackend;
        mockCallback = {
            successCallback: function() {},
            errorCallback:   function() {},
        };
        mockService = wineService;
    };

    it('should call successCallback when successfully called GET wines', function() {
        spyOn(mockCallback, "successCallback");
        $backEnd.expectGET("http://localhost:8888/wines", function(){
          return  true;
        }).respond(200, ["dataMock"]);
        mockService.echo(mockCallback.successCallback, mockCallback.errorCallback);
        $backEnd.flush();
        expect(mockCallback.successCallback).toHaveBeenCalledWith("dataMock");
    });
});
