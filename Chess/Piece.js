Chess.Piece = new Class({
    
    Implements: Events,

    player: null,
    
    square: null,
    
    moves: 0,
    
    captured: false,

    initialize: function(player, square) {
        this.player = player;
        this.square = square;
        square.piece = this;
    },
    
    moveTo: function(square) {
        if (square) {
            if (square.piece) {
                // Capture piece if square is occupied
                square.piece.moveTo(null);
            }
            square.piece = this;
            this.moves++;
        }
        this.fireEvent('move', square);
        this.captured = !square;
        this.square.piece = null;
        this.square = square;
        return this;
    },

    getValidMoves: function() {
        // Filter invalid moves from all possible moves (namely - moves that endanger the king)
        var rivalPlayer = this.player.getRivalPlayer(),
            originalSquare = this.square;

        return this.getMoves().filter(function(square) {
            // Check original state
            var originalPiece = square.piece;

            // Simulate the move
            this.moveTo(square);

            // Consider the move valid if it doesn't endanger the king
            var isValid = !rivalPlayer.threatensKing();

            // Return to original state
            this.moveTo(originalSquare);
            if (originalPiece) {
                originalPiece.moveTo(square);
            }

            return isValid;
        }, this);
    },

    getMoves: function() {
        throw new Error('Not Implemented');
    },

    getMovesByVectors: function(vectors, limit) {
        var moves = [], steps, vector, square;

        for (var i = 0, l = vectors.length; i < l; i++) {
            steps = 0;
            vector = vectors[i];
            square = this.square;
            // Add all squares in path
            while (square = square.getSibling(vector[0], vector[1])) {
                if (square.piece) {
                    // Square is occupied
                    if (square.piece.player != this.player) { 
                        // Occupied by other player - piece can be captured
                        moves.push(square);
                    }
                    break;
                }
                moves.push(square);
                steps++;

                // Check if steps limit exceeded
                if (limit && steps >= limit) {
                    break;
                }
            }
        }

        return moves;
    },
    
    getSymbol: function() {
        throw new Error('Not Implemented');
    }

});

Chess.Piece.Vectors = {
    diagonal: [[1, 1], [1, -1], [-1, -1], [-1, 1]],
    lateral: [[0, 1], [0, -1], [1, 0], [-1, 0]]
};