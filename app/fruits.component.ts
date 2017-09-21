import {Component} from "angular2/core";
import {FruitService} from "./fruit.service";

@Component({
    selector: 'fruits',
    template: `
        <h2>Fruits</h2>
        {{title}}
        <ul>
            <li *ngFor="#fruit of fruits">
                {{fruit}}
            </li>
        </ul>
    `,
    providers: [FruitService]
})

export class FruitsComponent {
    title = 'Fruits Heading Text';
    fruits;

    constructor(fruitService:FruitService) {
        this.fruits = fruitService.getFruits();    
    }

}

