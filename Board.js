Chess.Board = new Class({

    squares: {},

    initialize: function() {
        this.initSquares();
    },

    initSquares: function() {
        var xValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
            yValues = ['1', '2', '3', '4', '5', '6', '7', '8'],
            that = this;
        xValues.each(function(x) {
            yValues.each(function(y) {
                this.squares[x + y] = new Chess.Board.Square(that, x, y);
            });
        });
    }

});