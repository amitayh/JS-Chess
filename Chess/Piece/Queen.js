Chess.Piece.Queen = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♕' : '♛';
    },

    getMoves: function() {
        // Combine movement capabilities from the bishop and the rook
        var diagonal = Chess.Piece.Bishop.Movement(this),
            lateral = Chess.Piece.Rook.Movement(this);

        return diagonal.append(lateral);
    }

});