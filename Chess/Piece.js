Chess.Piece = new Class({

    player: null,

    initialize: function(player) {
        this.player = player;
    },

    canMove: function() {
        throw 'NotImplemented';
    },

    canOccupy: function() {
        return this.canMove();
    }

});