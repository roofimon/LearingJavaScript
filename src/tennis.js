var app = angular.module('TennisApp', []);

app.service('wineService', function($http){

  this.echo = function() {
    console.log("echo");
    $http.get("http://localhost:8888/wines").then(
    function(results) {
      console.log("success");
      console.log(results.data);
    },
    function(results) {
      console.log("error");
    });
  };

});

app.controller('TennisController', function($scope, wineService) {
    wineService.echo();
    $scope.wine = { "title": "Something" };
});

function Player() {
    this.score = 0;
}

function Tennis(playerA, playerB){
    var _rules = [
        new BothEqual(new Deuce()),
        new Deuce(),
        new AWin(),
        new BWin()
    ];
    this.player = {
        A: playerA,
        B: playerB,
    };
    this.textScore = {
        0:  "LOVE",
        15: "FIFTEEN",
        30: "THIRTY",
        40: "FORTY",
    };
    this.setScoreToPlayer = function(name) {
        if (this.player[name].score == 30) {
            this.player[name].score = 40;
        } else {
            this.player[name].score += 15;
        }
    };
    this.getScore = function(name) {
        return this.player[name].score;
    };
    this.judge = function() {
        var score = this.textScore[this.getScore("A")]+" - "+this.textScore[this.getScore("B")];
        var scoreA = this.getScore("A"),
            scoreB = this.getScore("B");

        _rules.forEach(function(rule) {
            if (rule.match(scoreA, scoreB)) {
                score = rule.toString();
                return;
            }
        });

        return score;
    };
}

function BWin() {
    var _win = function(scoreA, scoreB) {
        return (scoreB === 55) && (scoreA < 40);
    };
    var _winFromDuece = function(scoreA, scoreB) {
        return (scoreB === 70)&&(scoreA === 40);
    };
    this.match = function(scoreA, scoreB) {
        return _win(scoreA, scoreB) || _winFromDuece(scoreA, scoreB);
    };
    this.toString = function() {
        return 'PLAYER B WIN';
    };
}

function AWin() {
    var _win = function(scoreA, scoreB) {
        return (scoreA === 55) && (scoreB < 40);
    };
    var _winFromDuece = function(scoreA, scoreB) {
        return (scoreA === 70)&&(scoreB === 40);
    };
    this.match = function(scoreA, scoreB) {
        return _win(scoreA, scoreB) || _winFromDuece(scoreA, scoreB);
    };
    this.toString = function() {
        return 'PLAYER A WIN';
    };
}
function BothEqual(duece) {
    var _rule = duece,
        _score;

    var textScore = {
        0:  "LOVE",
        15: "FIFTEEN",
        30: "THIRTY",
        40: "FORTY",
    };

    this.match = function(scoreA, scoreB) {
        var _match = (scoreA === scoreB) && !_rule.match(scoreA, scoreB);
        if (_match) {
            _score = scoreA;
        }
        return _match;
    };

    this.toString = function() {
        return textScore[_score] + ' - ALL';
    };
}

function Deuce() {
    this.match = function(scoreA, scoreB) {
        return (scoreA === 40) && (scoreB === 40);
    };

    this.toString = function() {
        return 'DEUCE';
    };
}
