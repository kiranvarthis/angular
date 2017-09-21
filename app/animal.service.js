System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnimalService;
    return {
        setters:[],
        execute: function() {
            AnimalService = (function () {
                function AnimalService() {
                }
                AnimalService.prototype.getAnimals = function () {
                    return ["Animal1", "Animal2", "Animal3"];
                };
                return AnimalService;
            }());
            exports_1("AnimalService", AnimalService);
        }
    }
});
//# sourceMappingURL=animal.service.js.map