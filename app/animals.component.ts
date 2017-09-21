import {Component} from "angular2/core";
import {AnimalService} from "./animal.service";

@Component({
    selector: "animals",
    template: `
        <h2>Animals</h2>
        {{ title }}
        <ul>
            <li *ngFor="#animal of animals">
                {{ animal }}
            </li>
        </ul>
    `,
    providers: [AnimalService]
})

export class AnimalsComponent {
    title = "Animals Page Title";
    animals;

    constructor(animalService:AnimalService) {
        this.animals = animalService.getAnimals();
    }

}