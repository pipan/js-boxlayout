"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OneWayBinding_1 = require("../binding/OneWayBinding");
var BlockBlueprint = (function () {
    function BlockBlueprint(config) {
        this.config = config;
    }
    BlockBlueprint.prototype.bind = function (element) {
        for (var i = 0; i < this.config.length; i++) {
            var binding = new OneWayBinding_1.OneWayBinding(element, this.config[i].elementProperty);
            if (this.config[i].inverse) {
                this.config[i].position.bindInverse(binding);
            }
            else {
                this.config[i].position.bind(binding);
            }
        }
    };
    return BlockBlueprint;
}());
exports.BlockBlueprint = BlockBlueprint;
//# sourceMappingURL=BlockBlueprint.js.map