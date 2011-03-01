Chess.Player = new Class({

    game: null,

    color: null,

    initialize: function(game, color) {
        this.game = game;
        this.color = color;
        this.initPieces();
    },

    initPieces: function() {
        var x, y, piece;

        // First row
        ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook'].each(function(name, i) {
            x = Chess.Board.X[i];
            y = Chess.Board.Y[this.color ? 7 : 0];
            piece = new Chess.Piece[name](this);
            this.game.board.squares[x + y].piece = piece;
        }, this);

        // Second row (pawns)
        for (var i = 0; i < 8; i++) {
            x = Chess.Board.X[i];
            y = Chess.Board.Y[this.color ? 6 : 1];
            piece = new Chess.Piece.Pawn(this);
            this.game.board.squares[x + y].piece = piece;
        }
    }

});