var Chess = this.Chess = {};

Chess.Color = {White: 0, Black: 1};

Object.flip = Object.flip || function(obj) {
    var flipped = {};
    Object.each(obj, function(item, key) {
        flipped[item.toString()] = key;
    });
    return flipped;
};

Number.implement({
    inRange: function(min, max) {
        return this >= min && this <= max;
    }
});