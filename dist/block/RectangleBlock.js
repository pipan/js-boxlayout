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
                position: right,
                inverse: true
            }, {
                elementProperty: 'style.bottom',
                position: bottom,
                inverse: true
            }, {
                elementProperty: 'style.left',
                position: left
            }
        ]);
    }
    RecktangleBlock.prototype.bind = function (element) {
        this.blueprint.bind(element);
    };
    return RecktangleBlock;
}());
exports.RecktangleBlock = RecktangleBlock;
//# sourceMappingURL=RectangleBlock.js.map