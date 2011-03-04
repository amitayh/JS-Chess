Chess.Player = new Class({

    Implements: [Options, Events],

    game: null,

    color: null,
    
    pieces: [],

    initialize: function(game, color, options) {
        this.setOptions(options);
        this.game = game;
        this.color = color;
        this.initPieces();
    },

    initPieces: function() {
        // First row
        ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook'].each(function(type, x) {
            this.addPiece(type, x, this.isWhite() ? 0 : 7);
        }, this);

        // Second row (pawns)
        for (var x = 0; x < 8; x++) {
            this.addPiece('Pawn', x, this.isWhite() ? 1 : 6);
        }
    },
    
    addPiece: function(type, x, y) {
        var square = this.game.board.getSquare(x, y),
            piece = new Chess.Piece[type](this, square);
        this.pieces.push(piece);
    },

    isWhite: function() {
        return this.color == Chess.Color.White;
    },

    isBlack: function() {
        return this.color == Chess.Color.Black;
    },

    getRivalPlayer: function() {
        return this.game.players[this.isWhite() ? 'Black' : 'White'];
    },

    threatensKing: function() {
        return this.pieces.some(function(piece) {
            if (!piece.captured) {
                var moves = piece.getMoves(), square;
                for (var i = 0, l = moves.length; i < l; i++) {
                    square = moves[i];
                    if (square.piece && square.piece instanceof Chess.Piece.King) {
                        return true;
                    }
                }
            }
            return false;
        });
    },

    play: function(from, to) {
        // Validate move
        if (this.game.currentRound != this) {
            throw new Error("It's the other player's turn");
        }
        if (!from.piece || from.piece.player != this) {
            throw new Error("That square ain't yours");
        }
        if (!from.piece.getValidMoves().contains(to)) {
            throw new Error('This move is invalid');
        }

        // Make the move
        from.piece.moveTo(to);
        this.fireEvent('play', [from, to]);

        // Check for a checkmate
        if (this.threatensKing()) {
            this.fireEvent('check');

            // TODO: implement a checkmate check
        }

        return this;
    }

});