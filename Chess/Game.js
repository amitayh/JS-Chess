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
            Black: new Chess.Player(this, 'Black'),
            White: new Chess.Player(this, 'White')
        };
    }

});