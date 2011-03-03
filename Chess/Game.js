Chess.Game = new Class({

    log: [],

    rounds: 0,

    currentRound: null,

    initialize: function() {
        this.initBoard();
        this.initPlayers();
        this.nextRound();
    },

    initBoard: function() {
        this.board = new Chess.Board();
    },

    initPlayers: function() {
        var options = {
            onPlay: function(from, to) {
                this.rounds++;
                this.log.push([from, to]);
                this.nextRound();
            }.bind(this)
        };
        this.players = {
            White: new Chess.Player(this, Chess.Color.White, options),
            Black: new Chess.Player(this, Chess.Color.Black, options)
        };
    },

    getRivalPlayer: function(player) {
        return this.players[player.isWhite() ? 'Black' : 'White'];
    },

    nextRound: function() {
        this.currentRound = (this.rounds % 2) ? this.players.Black : this.players.White;
    }

});