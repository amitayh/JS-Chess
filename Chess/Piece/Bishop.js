Chess.Piece.Bishop = new Class({

    Extends: Chess.Piece,
    
    getSymbol: function() {
        return this.player.isWhite() ? '♗' : '♝';
    },

    getMoves: function() {
        return Chess.Piece.Bishop.Movement(this);
    }

});

Chess.Piece.Bishop.Movement = function(piece) {
    var moves = [], offset = [1, -1], offsetX, offsetY, square;

    for (var i = 0; i < 2; i++) {
        offsetX = offset[i];
        for (var _i = 0; _i < 2; _i++) {
            offsetY = offset[_i];
            square = piece.square;
            // Add all squares in path
            while (square = square.getSibling(offsetX, offsetY)) {
                if (square.piece) {
                    // Square is occupied
                    if (square.piece.player != piece.player) {
                        // Occupied by other player - piece can be captured
                        moves.push(square);
                    }
                    break;
                }
                moves.push(square);
            }
        }
    }

    return moves;
};