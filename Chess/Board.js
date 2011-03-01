Chess.Board = new Class({

    squares: {},

    initialize: function() {
        this.initSquares();
    },

    initSquares: function() {
        var that = this;
        Chess.Board.X.each(function(x) {
            Chess.Board.Y.each(function(y) {
                that.squares[x + y] = new Chess.Board.Square(that, x, y);
            });
        });
    }

});

Chess.Board.X = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
Chess.Board.Y = ['1', '2', '3', '4', '5', '6', '7', '8'];