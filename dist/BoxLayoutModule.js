"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@wildebeest/common");
var drag_1 = require("@wildebeest/drag");
var BoxLayout_1 = require("./BoxLayout");
var HorizontalDeviderBuilder_1 = require("./HorizontalDeviderBuilder");
var component_1 = require("@wildebeest/component");
var VerticalDeviderBuilder_1 = require("./VerticalDeviderBuilder");
var BoxLayoutModule = (function () {
    function BoxLayoutModule() {
    }
    BoxLayoutModule.prototype.getDependencies = function () {
        return [common_1.CommonModule, component_1.ComponentModule, drag_1.DragModule];
    };
    BoxLayoutModule.prototype.register = function (container) {
        container.bind(BoxLayout_1.BoxLayout).toSelf();
        container.bind('ComponentBuilder').to(VerticalDeviderBuilder_1.VerticalDeviderBuilder).inSingletonScope().whenTargetNamed('vertical-devider');
        container.bind('ComponentBuilder').to(HorizontalDeviderBuilder_1.HorizontalDeviderBuilder).inSingletonScope().whenTargetNamed('horizontal-devider');
    };
    BoxLayoutModule.prototype.boot = function (container) { };
    return BoxLayoutModule;
}());
exports.BoxLayoutModule = BoxLayoutModule;
//# sourceMappingURL=BoxLayoutModule.js.map