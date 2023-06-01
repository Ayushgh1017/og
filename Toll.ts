class TollBooth{
    private totalCar: number;
    private totalCash: number;

    constructor(){
        this.totalCar=0;
        this.totalCash=0;
    }
    public payingCar():void{
        this.totalCar++;
        this.totalCash+=50;
    }
    public nopayCar():void{
        this.totalCar++;
    }
    public display():void{
        console.log(`Total car: ${this.totalCar}`);
        console.log(`Total cash collected: ${this.totalCash} Rupees`);
    }
}

function sample(...values:string[]):void{
    const tollbooth = new TollBooth;
    for(let i=0;i<values.length;i++){
        const value = values[i];
        if(value ==='p'){
        tollbooth.payingCar();
        }
        else if(value ==='n'){
            tollbooth.nopayCar();
        }
    }
    tollbooth.display();
}
sample('p', 'p', 'n', 'p', 'n');
sample('p', 'p', 'n', 'p', 'p', 'n', 'p');
sample('p', 'p', 'n', 'p', 'n', 'p', 'p', 'p', 'n');