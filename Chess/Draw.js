Chess.Draw = new Class({
    
    initialize: function(game) {
        this.game = game;
    },  
    
    toElement: function() {
        // Create an HTML table that represents current state of the game
        var table = new Element('table'), colorMap = Object.flip(Chess.Color),
            blank = new Element('td', {html: '&nbsp;'}),
            trX = new Element('tr');
        
        blank.inject(trX);
        for (var i = 0; i < 8; i++) {
            new Element('td', {html: Chess.Board.X[i], align: 'center'}).inject(trX);
        }
        blank.clone().inject(trX);
        
        for (var y = 0; y < 8; y++) {
            var tr = new Element('tr'), tdY = new Element('td', {html: Chess.Board.Y[y]});
            tdY.inject(tr);
            for (var x = 0; x < 8; x++) {
                var square = this.game.board.getSquare(x, y),
                    color = colorMap[square.getColor()].toLowerCase(),
                    td = blank.clone().addClass(color);
                if (square.piece) {
                    td.set('html', square.piece.getSymbol());
                } 
                td.inject(tr);
            }
            tdY.clone().inject(tr);
            tr.inject(table, 'top');
        }
        
        trX.inject(table, 'top');
        trX.clone().inject(table);
        
        return table;
    }
    
});
