Chess.Player = new Class({

    game: null,

    color: null,

    initialize: function(game, color) {
        this.game = game;
        this.color = color;
        this.initPieces();
    },

    initPieces: function() {
        var that = this, piece, y, square;

        // First row
        ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'].each(function(name, i) {
            piece = new Chess.Piece[name.capitalize()](that);
            y = Chess.Board.Y[that.color ? 7 : 0];
            square = that.game.board.squares[Chess.Board.X[i] + y];
            square.piece = piece;
        });

        // Second row (pawns)
        for (var i = 0; i < 8; i++) {
            piece = new Chess.Piece.Pawn(this);
            y = Chess.Board.Y[this.color ? 6 : 1];
            square = this.game.board.squares[Chess.Board.X[i] + y];
            square.piece = piece;
        }
    }

});