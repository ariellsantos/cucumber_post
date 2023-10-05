import {MaxCapacityExceededError} from "./MaxCapacityExceededError";
import {NotEnoughApplesError} from './NotEnoughApplesError'

export class Basket {

    private readonly  MAX_CAPACITY = 10

    constructor(private amountApples: number) {}

    public takeApples(apples: number): void {
        this.ensureAmountOfApples(apples)
        this.amountApples = this.amountApples - apples;
    }

    public addApples(apples: number): void {
        this.ensureCapacity(apples)
        this.amountApples = this.amountApples + apples
    }

    public  howManyApples(): number {
        return this.amountApples;
    }

    private  ensureAmountOfApples(apples: number): void {
        if(apples > this.howManyApples())
            throw new NotEnoughApplesError(`You can't take more than ${this.howManyApples()} apples`)

    }

    private ensureCapacity(apples: number): void{
       if(apples + this.howManyApples()  > this.MAX_CAPACITY)
           throw new MaxCapacityExceededError( `You can't have more than ${this.MAX_CAPACITY} apples in the basket`)
    }


}