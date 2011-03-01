Object.flip = Object.flip || function(obj) {
    var flipped = {};
    Object.each(obj, function(item, key) {
        flipped[item.toString()] = key;
    });
    return flipped;
};

Chess.Draw = new Class({
    
    initialize: function(game) {
        this.game = game;
    },  
    
    toElement: function() {
        var table = new Element('table'), colorMap = Object.flip(Chess.Color)
        for (var y = 0; y < 8; y++) {
            var tr = new Element('tr');
            for (var x = 0; x < 8; x++) {
                var square = this.game.board.getSquare(x, y),
                    color = colorMap[square.getColor()].toLowerCase(),
                    td = td = new Element('td', {'html': '&nbsp;', 'class': color});
                if (square.piece) {
                    td.set('html', square.piece.getSymbol());
                } 
                td.inject(tr);
            }
            tr.inject(table, 'top');
        }
        return table;
    }
    
});
