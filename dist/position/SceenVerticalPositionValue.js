"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PositionValue_1 = require("./PositionValue");
var ScreenVerticalPositionValue = (function (_super) {
    __extends(ScreenVerticalPositionValue, _super);
    function ScreenVerticalPositionValue(value, viewportService) {
        var _this = _super.call(this, value, 0, viewportService.getHeight()) || this;
        viewportService.getEmitter().on('change', function (event) {
            _this.setMax(event.vertical);
        });
        return _this;
    }
    return ScreenVerticalPositionValue;
}(PositionValue_1.PositionValue));
exports.ScreenVerticalPositionValue = ScreenVerticalPositionValue;
//# sourceMappingURL=SceenVerticalPositionValue.js.map