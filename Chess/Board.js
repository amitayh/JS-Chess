Object.flip = function(obj) {
    var flipped = {};
    Object.each(obj, function(item, key) {
        flipped[item.toString()] = key;
    });
    return flipped;
};

Chess.Board = new Class({

    squares: [],

    initialize: function() {
        this.initSquares();
    },

    initSquares: function() {
        for (var y = 0; y < 8; y++) {
            var row = [];
            for (var x = 0; x < 8; x++) {
                row.push(new Chess.Board.Square(this, x, y))
            }
            this.squares.push(row);
        }
    },
    
    getSquare: function(x, y) {
        try {
            return this.squares[y][x];
        } catch (e) {
            return null;
        }
    }

});

Chess.Board.X = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
Chess.Board.Y = ['1', '2', '3', '4', '5', '6', '7', '8'];