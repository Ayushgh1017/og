var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.process = function (trans) {
        // Process the transaction here
        // Return true if transaction was approved, false otherwise
        console.log("Processing transaction with value: ".concat(trans.value()));
        // Implementation omitted for brevity
        return true;
    };
    return Account;
}());
var Transaction = /** @class */ (function () {
    function Transaction(valueInRupees) {
        this.valueInRupees = valueInRupees;
    }
    Transaction.prototype.value = function () {
        // Return the value of the transaction
        return this.valueInRupees;
    };
    return Transaction;
}());
var FilteredAccount = /** @class */ (function (_super) {
    __extends(FilteredAccount, _super);
    function FilteredAccount() {
        var _this = _super.call(this) || this;
        _this.filteredCount = 0;
        return _this;
    }
    FilteredAccount.prototype.process = function (trans) {
        if (trans.value() === 0) {
            // Zero-valued transaction is approved but not processed
            this.filteredCount++;
            console.log("Zero-valued transaction filtered out.");
            return true;
        }
        else {
            // Non-zero valued transaction is processed
            return _super.prototype.process.call(this, trans);
        }
    };
    FilteredAccount.prototype.filtered = function () {
        return this.filteredCount;
    };
    return FilteredAccount;
}(Account));
// Example usage:
var account = new FilteredAccount();
var transaction1 = new Transaction(100);
var transaction2 = new Transaction(0);
var transaction3 = new Transaction(-50);
account.process(transaction1); // Output: Processing transaction with value: 100
account.process(transaction2); // Output: Zero-valued transaction filtered out.
account.process(transaction3); // Output: Processing transaction with value: -50
console.log("Number of filtered transactions: ".concat(account.filtered())); // Output: Number of filtered transactions: 1
