Chess.Piece.Queen = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♕' : '♛';
    },

    getMoves: function() {
        var diagonal = Chess.Piece.Bishop.Movement(this),
            lateral = Chess.Piece.Rook.Movement(this);

        return diagonal.append(lateral);
    }

});