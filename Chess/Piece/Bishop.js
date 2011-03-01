Chess.Piece.Bishop = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.color ? '♝' : '♗';
    }

});