"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockBlueprint_1 = require("./BlockBlueprint");
var HorizontalBlock = (function () {
    function HorizontalBlock(emitter, left, right, top) {
        this.blueprint = new BlockBlueprint_1.BlockBlueprint(emitter, [
            {
                elementProperty: 'style.left',
                position: left
            }, {
                elementProperty: 'style.right',
                position: right
            }, {
                elementProperty: 'style.top',
                position: top
            }
        ]);
    }
    HorizontalBlock.prototype.bind = function (element) {
        this.blueprint.bind(element);
    };
    HorizontalBlock.prototype.getPositions = function () {
        return this.blueprint.getPositions();
    };
    return HorizontalBlock;
}());
exports.HorizontalBlock = HorizontalBlock;
//# sourceMappingURL=HorizontalBlock.js.map