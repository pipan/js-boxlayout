"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockBlueprint_1 = require("./BlockBlueprint");
var VerticalBlock = (function () {
    function VerticalBlock(top, bottom, left) {
        this.blueprint = new BlockBlueprint_1.BlockBlueprint([
            {
                elementProperty: 'style.top',
                position: top
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
    VerticalBlock.prototype.bind = function (element) {
        this.blueprint.bind(element);
    };
    return VerticalBlock;
}());
exports.VerticalBlock = VerticalBlock;
//# sourceMappingURL=VerticalBlock.js.map