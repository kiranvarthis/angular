System.register(["angular2/core", "./animal.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, animal_service_1;
    var AnimalsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animal_service_1_1) {
                animal_service_1 = animal_service_1_1;
            }],
        execute: function() {
            AnimalsComponent = (function () {
                function AnimalsComponent(animalService) {
                    this.title = "Animals Page Title";
                    this.animals = animalService.getAnimals();
                }
                AnimalsComponent = __decorate([
                    core_1.Component({
                        selector: "animals",
                        template: "\n        <h2>Animals</h2>\n        {{ title }}\n        <ul>\n            <li *ngFor=\"#animal of animals\">\n                {{ animal }}\n            </li>\n        </ul>\n    ",
                        providers: [animal_service_1.AnimalService]
                    }), 
                    __metadata('design:paramtypes', [animal_service_1.AnimalService])
                ], AnimalsComponent);
                return AnimalsComponent;
            }());
            exports_1("AnimalsComponent", AnimalsComponent);
        }
    }
});
//# sourceMappingURL=animals.component.js.map