Chess.Player = new Class({

    game: null,

    color: null,

    initialize: function(game, color) {
        this.game = game;
        this.color = color;
        this.initPieces();
    },

    initPieces: function() {
        var that = this, piece;

        // First row
        ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'].each(function(name, i) {
            piece = new Chess.Piece[name.capitalize()](that);
            this.game.board.squares[Chess.Board.X[i] + Chess.Board.Y[0]].piece = piece;
        });

        // Second row (pawns)
        for (var i = 0; i < 8; i++) {
            piece = new Chess.Piece.Pawn(this);
            this.game.board.squares[Chess.Board.X[i] + Chess.Board.Y[1]].piece = piece;
        }
    }

});