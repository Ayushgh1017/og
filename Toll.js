var TollBooth = /** @class */ (function () {
    function TollBooth() {
        this.totalCar = 0;
        this.totalCash = 0;
    }
    TollBooth.prototype.payingCar = function () {
        this.totalCar++;
        this.totalCash += 50;
    };
    TollBooth.prototype.nopayCar = function () {
        this.totalCar++;
    };
    TollBooth.prototype.display = function () {
        console.log("Total car: ".concat(this.totalCar));
        console.log("Total cash collected: ".concat(this.totalCash, " Rupees"));
    };
    return TollBooth;
}());
function sample() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var tollbooth = new TollBooth;
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (value === 'p') {
            tollbooth.payingCar();
        }
        else if (value === 'n') {
            tollbooth.nopayCar();
        }
    }
    tollbooth.display();
}
sample('p', 'p', 'n', 'p', 'n');
sample('p', 'p', 'n', 'p', 'p', 'n', 'p');
sample('p', 'p', 'n', 'p', 'n', 'p', 'p', 'p', 'n');
