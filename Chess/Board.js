Chess.Board = new Class({

    squares: {},

    initialize: function() {
        this.initSquares();
    },

    initSquares: function() {
        var xValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
            yValues = ['1', '2', '3', '4', '5', '6', '7', '8'],
            that = this;
        xValues.forEach(function(x) {
            yValues.forEach(function(y) {
                that.squares[x + y] = new Chess.Board.Square(that, x, y);
            });
        });
    }

});