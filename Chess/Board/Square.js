Chess.Board.Square = new Class({

    piece: null,

    initialize: function(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;
    },

    getColor: function() {
        var color = Chess.Board.Square.Color;
        return (this.x.charCodeAt(0) % 2 && this.y.toInt() % 2) ? color.Black : color.White;
    }

});

Chess.Board.Square.Color = {Black: 'black', White: 'white'};