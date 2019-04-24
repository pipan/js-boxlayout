"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockBlueprint_1 = require("./BlockBlueprint");
var RecktangleBlock = (function () {
    function RecktangleBlock(top, right, bottom, left) {
        this.blueprint = new BlockBlueprint_1.BlockBlueprint([
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
    }
    RecktangleBlock.prototype.bind = function (element) {
        this.blueprint.bind(element);
    };
    RecktangleBlock.prototype.getPositions = function () {
        return this.blueprint.getPositions();
    };
    return RecktangleBlock;
}());
exports.RecktangleBlock = RecktangleBlock;
//# sourceMappingURL=RectangleBlock.js.map