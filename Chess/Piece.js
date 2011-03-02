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
        var player = this.player,
            rivalPlayer = player.game.players[player.isWhite() ? 'Black' : 'White'],
            originalSquare = this.square,
            moves = [];
        
        this.getMoves().each(function(square) {
            // By default, consider the move valid
            var isValid = true;

            // Check original state
            var originalPiece = square.piece;

            // Simulate the move
            this.moveTo(square);

            // Go over rival's possible moves
            var pieces = rivalPlayer.pieces, piece;
            for (var i = 0, l = pieces.length; i < l; i++) {
                piece = pieces[i];
                if (!piece.captured) {
                    // If rival's piece is not captured, check if it can endanger the king
                    var rivalMoves = piece.getMoves(), rivalSquare;
                    for (var _i = 0, _l = rivalMoves.length; _i < _l; _i++) {
                        rivalSquare = rivalMoves[_i];
                        if (rivalSquare.piece && rivalSquare.piece instanceof Chess.Piece.King) {
                            isValid = false;
                            break;
                        }
                    }
                }
                if (!isValid) {
                    break;
                }
            }

            // Return to original state
            this.moveTo(originalSquare);
            if (originalPiece) {
                originalPiece.moveTo(square);
            }

            // Add move if valid
            if (isValid) {
                moves.push(square);
            }
        }, this);

        return moves;
    },

    getMoves: function() {
        throw new Error('Not Implemented');
    },
    
    getSymbol: function() {
        throw new Error('Not Implemented');
    }

});