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
            this.addPiece(type, x, this.color ? 7 : 0); 
        }, this);

        // Second row (pawns)
        for (var x = 0; x < 8; x++) {
            this.addPiece('Pawn', x, this.color ? 6 : 1);
        }
    },
    
    addPiece: function(type, x, y) {
        var square = this.game.board.getSquare(x, y),
            piece = new Chess.Piece[type](this, square);
        this.pieces.push(piece);
    }

});