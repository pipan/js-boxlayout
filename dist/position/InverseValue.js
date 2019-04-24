"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CallbackBinding_1 = require("../binding/CallbackBinding");
var InverseValue = (function () {
    function InverseValue(position) {
        this.bindings = [];
        this.position = position;
        this.position.bind(new CallbackBinding_1.CallbackBinding(this.setValue.bind(this)));
    }
    InverseValue.prototype.bind = function (binding) {
        this.bindings.push(binding);
    };
    InverseValue.prototype.getMax = function () {
        return this.position.getMax();
    };
    InverseValue.prototype.getMin = function () {
        return this.position.getMin();
    };
    InverseValue.prototype.moveBy = function (value) {
        this.position.moveBy(value);
    };
    InverseValue.prototype.getValue = function () {
        return this.getMax() - this.position.getValue();
    };
    InverseValue.prototype.setMax = function (max) {
        this.position.setMax(max);
    };
    InverseValue.prototype.setMin = function (min) {
        this.position.setMin(min);
    };
    InverseValue.prototype.setValue = function (value) {
        this.update();
    };
    InverseValue.prototype.update = function () {
        for (var i = 0; i < this.bindings.length; i++) {
            this.bindings[i].update(this.getValue());
        }
        this.getEmitter().emit('afterUpdate', {
            value: this.getValue(),
            max: this.getMax(),
            min: this.getMin()
        });
    };
    InverseValue.prototype.getEmitter = function () {
        return this.position.getEmitter();
    };
    return InverseValue;
}());
exports.InverseValue = InverseValue;
//# sourceMappingURL=InverseValue.js.map