"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PositionValue = (function () {
    function PositionValue(value, min, max) {
        this.bindings = [];
        this.inverseBindings = [];
        this.value = 0;
        this.value = value;
        this.min = min;
        this.max = max;
    }
    PositionValue.prototype.bind = function (binding) {
        this.bindings.push(binding);
    };
    PositionValue.prototype.bindInverse = function (binding) {
        this.inverseBindings.push(binding);
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
        for (var i = 0; i < this.inverseBindings.length; i++) {
            this.inverseBindings[i].update(this.max - this.value);
        }
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
    return PositionValue;
}());
exports.PositionValue = PositionValue;
//# sourceMappingURL=PositionValue.js.map