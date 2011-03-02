Chess.Board.Square = new Class({
    
    piece: null,

    initialize: function(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;
    },

    getSibling: function(offsetX, offsetY) {
        return this.board.getSquare(this.x + offsetX, this.y + offsetY);
    },

    getColor: function() {
        var xor = function(a, b) { return !a != !b; };
        return xor(this.x % 2, this.y % 2) ? Chess.Color.White : Chess.Color.Black;
    },

    getPosition: function() {
        return Chess.Board.X[this.x] + Chess.Board.Y[this.y];
    }

});