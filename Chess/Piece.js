Chess.Piece = new Class({

    player: null,

    initialize: function(player) {
        this.player = player;
    },

    canMove: function() {

    },

    canOccupy: function() {
        return this.canMove();
    }

});