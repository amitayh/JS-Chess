Chess.Piece.Rook = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♖' : '♜';
    }

});