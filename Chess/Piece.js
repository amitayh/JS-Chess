Chess.Piece = new Class({

    player: null,
    
    square: null,
    
    moves: 0,
    
    captured: false,

    initialize: function(player, square) {
        this.player = player;
        this.square = square;
        square.piece = this;
    },
    
    moveTo: function(square) {
        if (square.piece) {
            square.piece.capture();
        }
        this.square.piece = null;
        this.square = square;
        square.piece = this;
        this.moves++;
        return this;
    },
    
    capture: function() {
        this.square.piece = null;
        this.square = null;
        this.captured = true;
        return this;
    },

    getMoves: function() {
        throw 'NotImplemented';
    },
    
    getSymbol: function() {
        throw 'NotImplemented';
    },
    
    getCaptures: function() {
        return this.getMoves();
    }

});