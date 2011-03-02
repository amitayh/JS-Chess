Chess.Piece.Knight = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♘' : '♞';
    },

    getMoves: function() {
        var moves = [], offset = [1, 2, -1, -2], offsetX, offsetY, square;

        for (var i = 0; i < 4; i++) {
            offsetX = offset[i];
            for (var _i = 0; _i < 4; _i++) {
                offsetY = offset[_i];
                if (offsetX.abs() == offsetY.abs()) {
                    continue;
                }
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