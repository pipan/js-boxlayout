"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScreenHorizontalPositionValue = (function () {
    function ScreenHorizontalPositionValue(position, viewportService) {
        var _this = this;
        this.position = position;
        viewportService.getEmitter().on('change', function (event) {
            _this.setMax(event.horizontal);
        });
    }
    ScreenHorizontalPositionValue.prototype.bind = function (binding) {
        this.position.bind(binding);
    };
    ScreenHorizontalPositionValue.prototype.getMax = function () {
        return this.position.getMax();
    };
    ScreenHorizontalPositionValue.prototype.getMin = function () {
        return this.position.getMin();
    };
    ScreenHorizontalPositionValue.prototype.getValue = function () {
        return this.position.getValue();
    };
    ScreenHorizontalPositionValue.prototype.moveBy = function (value) {
        this.position.moveBy(value);
    };
    ScreenHorizontalPositionValue.prototype.setMax = function (max) {
        this.position.setMax(max);
        this.update();
    };
    ScreenHorizontalPositionValue.prototype.setMin = function (min) {
        this.position.setMin(min);
        this.update();
    };
    ScreenHorizontalPositionValue.prototype.setValue = function (value) {
        this.position.setValue(value);
        this.update();
    };
    ScreenHorizontalPositionValue.prototype.update = function () {
        this.position.update();
    };
    return ScreenHorizontalPositionValue;
}());
exports.ScreenHorizontalPositionValue = ScreenHorizontalPositionValue;
//# sourceMappingURL=ScreenHorizontalPositionValue.js.map