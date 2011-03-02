Chess.Piece.Pawn = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♙' : '♟';
    },
    
    getMoves: function() {
        var moves = [], dir = this.player.isWhite() ? 1 : -1, square;

        // 1 Forward
        square = this.square.getSibling(0, dir);
        if (square && !square.piece) {
            moves.push(square);
        }
        // 2 Forward (if didn't move yet)
        square = this.square.getSibling(0, dir * 2);
        if (square && !square.piece && this.moves == 0) {
            moves.push(square);
        }
        // Capture 1
        square = this.square.getSibling(1, dir);
        if (square && square.piece && square.piece.player != this.player) {
            moves.push(square);
        }
        // Capture 2
        square = this.square.getSibling(-1, dir);
        if (square && square.piece && square.piece.player != this.player) {
            moves.push(square);
        }
        // TODO: implement 'en passant' move
        
        return moves;
    }

});