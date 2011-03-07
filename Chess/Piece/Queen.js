Chess.Piece.Queen = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♕' : '♛';
    },

    getMoves: function() {
        var vectors = Chess.Piece.Vectors;
        return this.getMovesByVectors(vectors.diagonal.append(vectors.lateral));
    }

});