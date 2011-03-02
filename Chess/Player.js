Chess.Player = new Class({

    game: null,

    color: null,
    
    pieces: [],

    initialize: function(game, color) {
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
    }

});