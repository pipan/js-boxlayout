"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@wildebeest/common");
var PositionValue = (function () {
    function PositionValue(value, min, max) {
        this.bindings = [];
        this.value = 0;
        this.value = value;
        this.min = min;
        this.max = max;
        this.emitter = new common_1.Emitter();
    }
    PositionValue.prototype.bind = function (binding) {
        this.bindings.push(binding);
    };
    PositionValue.prototype.setValue = function (value) {
        value = Math.min(Math.max(value, this.min), this.max);
        var changed = this.value != value;
        this.value = value;
        if (changed) {
            this.update();
        }
    };
    PositionValue.prototype.moveBy = function (value) {
        this.setValue(this.getValue() + value);
    };
    PositionValue.prototype.getValue = function () {
        return this.value;
    };
    PositionValue.prototype.update = function () {
        for (var i = 0; i < this.bindings.length; i++) {
            this.bindings[i].update(this.value);
        }
        this.getEmitter().emit('afterUpdate', {
            value: this.getValue(),
            min: this.getMin(),
            max: this.getMax()
        });
    };
    PositionValue.prototype.getMax = function () {
        return this.max;
    };
    PositionValue.prototype.getMin = function () {
        return this.min;
    };
    PositionValue.prototype.setMax = function (max) {
        this.max = max;
        this.setValue(this.getValue());
    };
    PositionValue.prototype.setMin = function (min) {
        this.min = min;
        this.setValue(this.getValue());
    };
    PositionValue.prototype.getEmitter = function () {
        return this.emitter;
    };
    return PositionValue;
}());
exports.PositionValue = PositionValue;
//# sourceMappingURL=PositionValue.js.map