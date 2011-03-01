Chess.Piece.Knight = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.color ? '♞' : '♘';
    }

});