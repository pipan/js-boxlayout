"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockBlueprint_1 = require("./BlockBlueprint");
var HorizontalBlock = (function () {
    function HorizontalBlock(left, right, top) {
        this.blueprint = new BlockBlueprint_1.BlockBlueprint([
            {
                elementProperty: 'style.left',
                position: left
            }, {
                elementProperty: 'style.right',
                position: right,
                inverse: true
            }, {
                elementProperty: 'style.top',
                position: top
            }
        ]);
    }
    HorizontalBlock.prototype.bind = function (element) {
        this.blueprint.bind(element);
    };
    return HorizontalBlock;
}());
exports.HorizontalBlock = HorizontalBlock;
//# sourceMappingURL=HorizontalBlock.js.map