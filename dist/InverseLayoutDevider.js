"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InverseLayoutDevider = (function () {
    function InverseLayoutDevider(emitter, position, relativeTo) {
        if (position === void 0) { position = 0; }
        if (relativeTo === void 0) { relativeTo = 0; }
        this.position = 0;
        this.relativeTo = 0;
        this.emitter = emitter;
        this.position = position;
        this.relativeTo = relativeTo;
    }
    InverseLayoutDevider.prototype.getEmitter = function () {
        return this.emitter;
    };
    InverseLayoutDevider.prototype.detectChange = function () {
        this.emitter.emit('change', this.getAbsolutePosition());
    };
    InverseLayoutDevider.prototype.setPosition = function (value) {
        var changed = this.position != value;
        this.position = value;
        if (changed) {
            this.detectChange();
        }
    };
    InverseLayoutDevider.prototype.setRelativeTo = function (value) {
        var changed = this.relativeTo != value;
        this.relativeTo = value;
        if (changed) {
            this.detectChange();
        }
    };
    InverseLayoutDevider.prototype.getPosition = function () {
        return this.position;
    };
    InverseLayoutDevider.prototype.changePositionBy = function (value) {
        this.setPosition(this.getPosition() - value);
    };
    InverseLayoutDevider.prototype.getAbsolutePosition = function () {
        return this.relativeTo - this.position;
    };
    InverseLayoutDevider.prototype.hasPosition = function (value) {
        return this.position == value;
    };
    return InverseLayoutDevider;
}());
exports.InverseLayoutDevider = InverseLayoutDevider;
//# sourceMappingURL=InverseLayoutDevider.js.map