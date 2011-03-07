Chess.Piece.King = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♔' : '♚';
    },

    getMoves: function() {
        return this.getMovesByVectors(Chess.Piece.Vectors.Omni, 1);
    }

});