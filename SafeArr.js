var SafeArr = /** @class */ (function () {
    function SafeArr() {
        this.array = new Array(5);
        this.failedAttempts = 0;
        this.failedIndexes = [];
    }
    SafeArr.prototype.putElement = function (index, value) {
        if (index < 0 || index >= this.array.length) {
            this.failedAttempts++;
            this.failedIndexes.push(index);
            return;
        }
        this.array[index] = value;
    };
    SafeArr.prototype.getElement = function (index) {
        if (index < 0 || index >= this.array.length) {
            this.failedAttempts++;
            this.failedIndexes.push(index);
            return -1;
        }
        return this.array[index];
    };
    SafeArr.prototype.getFailedAttempts = function () {
        return this.failedAttempts;
    };
    SafeArr.prototype.getFailedIndexes = function () {
        return this.failedIndexes;
    };
    return SafeArr;
}());
var sa1 = new SafeArr();
var temp = 125;
sa1.putElement(3, temp);
temp = sa1.getElement(3);
console.log(temp); // Output: 125
