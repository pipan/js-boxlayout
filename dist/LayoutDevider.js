"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LayoutDevider = (function () {
    function LayoutDevider(emitter, position) {
        if (position === void 0) { position = 0; }
        this.position = 0;
        this.emitter = emitter;
        this.position = position;
    }
    LayoutDevider.prototype.getEmitter = function () {
        return this.emitter;
    };
    LayoutDevider.prototype.detectChange = function () {
        this.emitter.emit('change', this.getPosition());
    };
    LayoutDevider.prototype.setPosition = function (value) {
        var changed = this.position != value;
        this.position = value;
        if (changed) {
            this.detectChange();
        }
    };
    LayoutDevider.prototype.changePositionBy = function (value) {
        this.setPosition(this.getPosition() + value);
    };
    LayoutDevider.prototype.getPosition = function () {
        return this.position;
    };
    LayoutDevider.prototype.hasPosition = function (value) {
        return this.position == value;
    };
    return LayoutDevider;
}());
exports.LayoutDevider = LayoutDevider;
//# sourceMappingURL=LayoutDevider.js.map