"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockBlueprint_1 = require("./BlockBlueprint");
var VerticalBlock = (function () {
    function VerticalBlock(emitter, top, bottom, left) {
        this.blueprint = new BlockBlueprint_1.BlockBlueprint(emitter, [
            {
                elementProperty: 'style.top',
                position: top
            }, {
                elementProperty: 'style.bottom',
                position: bottom
            }, {
                elementProperty: 'style.left',
                position: left
            }
        ]);
    }
    VerticalBlock.prototype.bind = function (element) {
        this.blueprint.bind(element);
    };
    VerticalBlock.prototype.getPositions = function () {
        return this.blueprint.getPositions();
    };
    VerticalBlock.prototype.getEmitter = function () {
        return this.blueprint.getEmitter();
    };
    return VerticalBlock;
}());
exports.VerticalBlock = VerticalBlock;
//# sourceMappingURL=VerticalBlock.js.map