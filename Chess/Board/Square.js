Chess.Board.Square = new Class({
    
    piece: null,

    initialize: function(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;
    },

    getColor: function() {
        var xor = function(a, b) { return !a != !b; };
        return xor(this.x % 2, this.y % 2) ? Chess.Color.White : Chess.Color.Black;
    }

});