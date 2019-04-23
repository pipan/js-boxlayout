"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OneWayBinding_1 = require("./OneWayBinding");
var PixelsBinding = (function () {
    function PixelsBinding(object, key) {
        this.oneWay = new OneWayBinding_1.OneWayBinding(object, key);
    }
    PixelsBinding.prototype.update = function (value) {
        this.oneWay.update(value + "px");
    };
    return PixelsBinding;
}());
exports.PixelsBinding = PixelsBinding;
//# sourceMappingURL=PixelsBinding.js.map