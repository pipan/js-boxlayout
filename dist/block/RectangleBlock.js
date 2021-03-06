"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockBlueprint_1 = require("./BlockBlueprint");
var RecktangleBlock = (function () {
    function RecktangleBlock(emitter, top, right, bottom, left) {
        this.blueprint = new BlockBlueprint_1.BlockBlueprint(emitter, [
            {
                elementProperty: 'style.top',
                position: top
            }, {
                elementProperty: 'style.right',
                position: right
            }, {
                elementProperty: 'style.bottom',
                position: bottom
            }, {
                elementProperty: 'style.left',
                position: left
            }
        ]);
        this.blueprint;
    }
    RecktangleBlock.prototype.bind = function (element) {
        this.blueprint.bind(element);
    };
    RecktangleBlock.prototype.getPositions = function () {
        return this.blueprint.getPositions();
    };
    RecktangleBlock.prototype.getEmitter = function () {
        return this.blueprint.getEmitter();
    };
    return RecktangleBlock;
}());
exports.RecktangleBlock = RecktangleBlock;
//# sourceMappingURL=RectangleBlock.js.map