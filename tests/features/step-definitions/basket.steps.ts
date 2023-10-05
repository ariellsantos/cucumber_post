import {Given, Then, When} from "@cucumber/cucumber";
import {Basket} from "../../../src/Basket";
import * as assert from "assert";
import {NotEnoughApplesError} from "../../../src/NotEnoughApplesError";
import {MaxCapacityExceededError} from "../../../src/MaxCapacityExceededError";



let errorResponse: string = ''

let baseket: Basket

Given('I have {int} apples in the basket', (apples: number): void => {
    baseket = new Basket(apples)
} )


When('I take {int} apples', (apples: number): void => {
    baseket.takeApples(apples)
})


Then('Should be {int} apples left in the basket', (apples: number): void => {
    assert.strictEqual(baseket.howManyApples(), apples)
})

Then('I take {int} apples , more than the amount of apples that i have',(apples: number): void => {
    try{
       baseket.takeApples(apples)
    }catch (error ) {
        if(error instanceof NotEnoughApplesError)
            errorResponse = error.message
    }
} )

When('I add {int} apples more, more than the max capacity' , (apples: number) : void  => {
    try {
        baseket.addApples(apples)
    }catch (error){
        if(error instanceof MaxCapacityExceededError)
            errorResponse = error.message
    }
})

Then('It should response an error {string}', (error: string) : void => {
    assert.strictEqual(error, errorResponse)
})


When('I add {int} apples', (apples: number): void => {
    baseket.addApples(apples)
}

)

