System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FruitService;
    return {
        setters:[],
        execute: function() {
            FruitService = (function () {
                function FruitService() {
                }
                FruitService.prototype.getFruits = function () {
                    return ["Fruit1", "Fruit2", "Fruit3"];
                };
                return FruitService;
            }());
            exports_1("FruitService", FruitService);
        }
    }
});
//# sourceMappingURL=fruit.service.js.map