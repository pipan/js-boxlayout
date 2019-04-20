"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyLayout = (function () {
    function EmptyLayout(emitter) {
        this.deviders = {};
        this.emitter = emitter;
    }
    EmptyLayout.prototype.initialize = function (element) {
        this.element = element;
    };
    EmptyLayout.prototype.addDevider = function (name, devider) {
        this.deviders[name] = devider;
    };
    EmptyLayout.prototype.setDeviders = function (deviders) {
        this.deviders = deviders;
    };
    EmptyLayout.prototype.getDeviders = function () {
        return this.deviders;
    };
    EmptyLayout.prototype.getDevider = function (name) {
        return this.deviders[name];
    };
    EmptyLayout.prototype.getEmitter = function () {
        return this.emitter;
    };
    EmptyLayout.prototype.getElement = function () {
        return this.element;
    };
    EmptyLayout.prototype.bindElement = function (elementBindage, deviderName) {
        var _this = this;
        this.getDevider(deviderName).getEmitter().on('change', function (event) {
            elementBindage.update(event);
            _this.emitter.emit('afterUpdate', {
                'devider': deviderName,
                'value': event
            });
        });
    };
    return EmptyLayout;
}());
exports.EmptyLayout = EmptyLayout;
//# sourceMappingURL=EmptyLayout.js.map