"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScreenVerticalPositionValue = (function () {
    function ScreenVerticalPositionValue(position, viewportService) {
        var _this = this;
        this.position = position;
        viewportService.getEmitter().on('change', function (event) {
            _this.setMax(event.height);
        });
    }
    ScreenVerticalPositionValue.prototype.bind = function (binding) {
        this.position.bind(binding);
    };
    ScreenVerticalPositionValue.prototype.getMax = function () {
        return this.position.getMax();
    };
    ScreenVerticalPositionValue.prototype.getMin = function () {
        return this.position.getMin();
    };
    ScreenVerticalPositionValue.prototype.getValue = function () {
        return this.position.getValue();
    };
    ScreenVerticalPositionValue.prototype.moveBy = function (value) {
        this.position.moveBy(value);
    };
    ScreenVerticalPositionValue.prototype.setMax = function (max) {
        this.position.setMax(max);
        this.update();
    };
    ScreenVerticalPositionValue.prototype.setMin = function (min) {
        this.position.setMin(min);
        this.update();
    };
    ScreenVerticalPositionValue.prototype.setValue = function (value) {
        this.position.setValue(value);
        this.update();
    };
    ScreenVerticalPositionValue.prototype.update = function () {
        this.position.update();
    };
    return ScreenVerticalPositionValue;
}());
exports.ScreenVerticalPositionValue = ScreenVerticalPositionValue;
//# sourceMappingURL=SceenVerticalPositionValue.js.map