"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CallbackBinding = (function () {
    function CallbackBinding(callback) {
        this.callback = callback;
    }
    CallbackBinding.prototype.update = function (value) {
        this.callback(value);
    };
    return CallbackBinding;
}());
exports.CallbackBinding = CallbackBinding;
//# sourceMappingURL=CallbackBinding.js.map