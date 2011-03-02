Chess.Piece = new Class({

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
        if (square.piece) {
            square.piece.capture();
        }
        if (this.captured) {
            this.captured = false;
        } else {
            this.square.piece = null;
            this.moves++;
        }
        this.square = square;
        square.piece = this;
        return this;
    },
    
    capture: function() {
        this.square.piece = null;
        this.square = null;
        this.captured = true;
        return this;
    },

    getValidMoves: function() {
        var player = this.player,
            rivalPlayer = player.game.players[player.isWhite() ? 'Black' : 'White'],
            originalSquare = this.square,
            moves = [];
        
        this.getMoves().each(function(square) {
            // By default, consider the move valid
            var isValid = true;

            // Check original state
            var originalPiece = square.piece ? square.piece : null;

            // Simulate the move
            this.moveTo(square);

            // Go over rival's possible moves
            for (var i = 0, l = rivalPlayer.pieces.length; i < l; i++) {
                var piece = rivalPlayer.pieces[i];
                if (!piece.captured) {
                    // If rival's piece is not captured, check if it can endanger the king
                    var _moves = piece.getMoves(), _square;
                    for (var _i = 0, _l = _moves.length; _i < _l; _i++) {
                        _square = _moves[_i];
                        if (_square.piece && _square.piece instanceof Chess.Piece.King) {
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