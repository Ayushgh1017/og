class Account {
    process(trans: Transaction): boolean {
      // Process the transaction here
      // Return true if transaction was approved, false otherwise
      console.log(`Processing transaction with value: ${trans.value()}`);
      // Implementation omitted for brevity
      return true;
    }
  }
  
  class Transaction {
    private valueInRupees: number;
  
    constructor(valueInRupees: number) {
      this.valueInRupees = valueInRupees;
    }
  
    value(): number {
      // Return the value of the transaction
      return this.valueInRupees;
    }
  }
  
  class FilteredAccount extends Account {
    private filteredCount: number;
  
    constructor() {
      super();
      this.filteredCount = 0;
    }
  
    process(trans: Transaction): boolean {
      if (trans.value() === 0) {
        // Zero-valued transaction is approved but not processed
        this.filteredCount++;
        console.log("Zero-valued transaction filtered out.");
        return true;
      } else {
        // Non-zero valued transaction is processed
        return super.process(trans);
      }
    }
  
    filtered(): number {
      return this.filteredCount;
    }
  }
  
  // Example usage:
  const account = new FilteredAccount();
  
  const transaction1 = new Transaction(100);
  const transaction2 = new Transaction(0);
  const transaction3 = new Transaction(-50);
  
  account.process(transaction1); // Output: Processing transaction with value: 100
  account.process(transaction2); // Output: Zero-valued transaction filtered out.
  account.process(transaction3); // Output: Processing transaction with value: -50
  
  console.log(`Number of filtered transactions: ${account.filtered()}`); // Output: Number of filtered transactions: 1
  