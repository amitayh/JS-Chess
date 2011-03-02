Chess.Piece.Rook = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♖' : '♜';
    },

    getMoves: function() {
        var moves = [], offsets = [[1, 0], [-1, 0], [0, 1], [0, -1]], offset, square;
        
        for (var i = 0; i < 4; i++) {
            offset = offsets[i];
            square = this.square;
            // Add all squares in path
            while (square = square.getSibling(offset[0], offset[1])) {
                if (square.piece) {
                    // Square is occupied
                    if (square.piece.player != this.player) {
                        // Occupied by other player - piece can be captured
                        moves.push(square);
                    }
                    break;
                }
                moves.push(square);
            }
        }

        return moves;
    }

});