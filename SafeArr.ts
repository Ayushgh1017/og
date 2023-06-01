class SafeArr {
    private array: number[];
    private failedAttempts: number;
    private failedIndexes: number[];
  
    constructor() {
      this.array = new Array(5);
      this.failedAttempts = 0;
      this.failedIndexes = [];
    }
  
    public putElement(index: number, value: number): void {
      if (index < 0 || index >= this.array.length) {
        this.failedAttempts++;
        this.failedIndexes.push(index);
        return;
      }
  
      this.array[index] = value;
    }
  
    public getElement(index: number): number {
      if (index < 0 || index >= this.array.length) {
        this.failedAttempts++;
        this.failedIndexes.push(index);
        return -1;
      }
  
      return this.array[index];
    }
  
    public getFailedAttempts(): number {
      return this.failedAttempts;
    }
  
    public getFailedIndexes(): number[] {
      return this.failedIndexes;
    }
  }
  
  let sa1 = new SafeArr();
  let temp = 125;
  sa1.putElement(3, temp);
  temp = sa1.getElement(3);
  console.log(temp); // Output: 125
  