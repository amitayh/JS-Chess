Chess.Piece.Pawn = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.color ? '♟' : '♙';
    },
    
    getMoves: function() {
        var moves = [];
        
        return moves;
    }

});