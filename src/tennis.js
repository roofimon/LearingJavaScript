angular.module('TennisApp', [
    'TennisApp.controllers'
]);

angular.module('TennisApp.controllers', [])
.controller('TennisController', function($scope) {
    $scope.messages = ["French Open", "US Open"];
    $scope.tennis = new Tennis(new Player(), new Player());
});

function Player() {
    this.score = 0;
}

function Tennis(playerA, playerB){
    var _rules = [
        new BothEqual(new Deuce()),
        new Deuce()
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
    this.playerAWinGame = function() {
        return (this.player.A.score === 55)&&(this.player.B.score < 40);
    };
    this.playerAWinGameFromDeuce = function() {
        return (this.player.A.score === 70)&&(this.player.B.score === 40);
    };
    this.playerBWinGame = function() {
        return (this.player.B.score === 55)&&(this.player.A.score < 40);
    };
    this.playerBWinGameFromDeuce = function() {
        return (this.player.A.score === 40)&&(this.player.B.score === 70);
    };
    this.judge = function() {
        var score = this.textScore[this.getScore("A")]+" - "+this.textScore[this.getScore("B")];
        if(_rules[0].match(this.getScore("A"), this.getScore("B"))){
            score = _rules[0].toString();
        }else if(_rules[1].match(this.getScore("A"), this.getScore("B"))){
            score = _rules[1].toString();
        }else if(this.playerAWinGame()||this.playerAWinGameFromDeuce()){
            score = "PLAYER A WIN";
        }else if(this.playerBWinGame()||this.playerBWinGameFromDeuce()){
            score = "PLAYER B WIN";
        }
        return score;
    };
};

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
