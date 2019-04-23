"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PixelsBinding_1 = require("../binding/PixelsBinding");
var BlockBlueprint = (function () {
    function BlockBlueprint(config) {
        this.config = config;
    }
    BlockBlueprint.prototype.bind = function (element) {
        for (var i = 0; i < this.config.length; i++) {
            var binding = new PixelsBinding_1.PixelsBinding(element, this.config[i].elementProperty);
            this.config[i].position.bind(binding);
        }
    };
    return BlockBlueprint;
}());
exports.BlockBlueprint = BlockBlueprint;
//# sourceMappingURL=BlockBlueprint.js.map