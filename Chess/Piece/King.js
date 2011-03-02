Chess.Piece.King = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♔' : '♚';
    },

    getMoves: function() {
        var moves = [], offset = [1, 0, -1], offsetX, offsetY, square;

        for (var i = 0; i < 3; i++) {
            offsetX = offset[i];
            for (var _i = 0; _i < 3; _i++) {
                offsetY = offset[_i];
                square = this.square.getSibling(offsetX, offsetY);
                if (square) {
                    if (square.piece) {
                        // Square is occupied
                        if (square.piece.player != this.player) {
                            // Occupied by other player - piece can be captured
                            moves.push(square);
                        }
                    } else {
                        moves.push(square);
                    }
                }
            }
        }

        return moves;
    }

});