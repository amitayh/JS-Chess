Chess.Game = new Class({

    log: [],

    initialize: function() {
        this.initBoard();
        this.initPlayers();
    },

    initBoard: function() {
        this.board = new Chess.Board();
    },

    initPlayers: function() {
        this.players = {
            White: new Chess.Player(this, Chess.Color.White),
            Black: new Chess.Player(this, Chess.Color.Black)
        };
    },

    move: function(from, to) {
        
    }

});