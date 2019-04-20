"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drag_1 = require("@wildebeest/drag");
var DeviderElement = (function () {
    function DeviderElement(element, devider, emitter) {
        this.element = element;
        this.devider = devider;
        this.emitter = emitter;
        new drag_1.DragableElement(this.element, this.emitter);
    }
    DeviderElement.prototype.getEmitter = function () {
        return this.emitter;
    };
    DeviderElement.prototype.getElement = function () {
        return this.element;
    };
    return DeviderElement;
}());
exports.DeviderElement = DeviderElement;
//# sourceMappingURL=DeviderElement.js.map