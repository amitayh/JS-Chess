Chess.Piece.Knight = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♘' : '♞';
    },

    getMoves: function() {
        var vectors = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
        return this.getMovesByVectors(vectors, 1);
    }

});