'use strict';
/* jasmine specs for controllers go here */
describe('Tennis', function(){

    var tennis;

    beforeEach(function() {
        tennis = new Tennis(new Player(), new Player());
    });
    it('should return player A score equal to 0 when game start', function() {
        expect(tennis.getScore("A")).toEqual(0);
    });
    it('should return player B score equal to 0 when game start', function() {
        expect(tennis.getScore("B")).toEqual(0);
    });
    it('should return LOVE - LOVE when score is 0 - 0', function() {
        expect(tennis.judge()).toEqual("LOVE - ALL");
    });
    it('should return player A score equal to 15 when game start and player A get score', function() {
        tennis.setScoreToPlayer("A");
        expect(tennis.getScore("A")).toEqual(15);
    });
    it("should return FIFTEEN - LOVE when score is 15 - 0", function() {
        tennis.setScoreToPlayer("A");
        expect(tennis.judge()).toEqual("FIFTEEN - LOVE");
    });
    it('should return player B score equal to 15 when game is 15-0 and player B get score', function(){
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        expect(tennis.getScore("B")).toEqual(15);
    });
    it("should return FIFTEEN - ALL when score is 15 - 15", function() {
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        expect(tennis.judge()).toEqual("FIFTEEN - ALL");
    });
    it("should return THIRTY - ALL when score is 30 - 30", function() {
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        expect(tennis.judge()).toEqual("THIRTY - ALL");
    });
    it('should return player A score equal to 30 when game is 15-15 and player A get score', function(){
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("A");
        expect(tennis.getScore("A")).toEqual(30);
    });
    it('should return player A score equal to 40 when game is 30-15 and plyaer A get score', function() {
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");

        expect(tennis.getScore("A")).toEqual(40);
    });
    it('should return FORTY - FIFTEEN when game is 30-15 and plyaer A get score', function() {
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");

        expect(tennis.judge()).toEqual("FORTY - FIFTEEN");
    });
    it('should return deuce when both player score are 40', function() {
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("B");

        expect(tennis.judge()).toEqual("DEUCE");
    });
    it('should return PLAYER A WIN when game is 55-40 and player A get score', function() {
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("A");

        expect(tennis.judge()).toEqual("PLAYER A WIN")
    });
    it('should return PLAYER B WIN when game is 40-55 and player B get score', function() {
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("B");

        expect(tennis.judge()).toEqual("PLAYER B WIN")
    });
    it('should return PLAYER A WIN when game is 40-30 and player A get score', function() {
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("A");

        expect(tennis.judge()).toEqual("PLAYER A WIN")
    });
    it('should return PLAYER B WIN when game is 30-40 and player B get score', function() {
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("A");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("B");
        tennis.setScoreToPlayer("B");

        expect(tennis.judge()).toEqual("PLAYER B WIN")
    });
});
