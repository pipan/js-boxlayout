"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@wildebeest/common");
var scroll_1 = require("@wildebeest/scroll");
var drag_1 = require("@wildebeest/drag");
var BoxLayout_1 = require("./BoxLayout");
var HorizontalDeviderBuilder_1 = require("./HorizontalDeviderBuilder");
var component_1 = require("@wildebeest/component");
var VerticalDeviderBuilder_1 = require("./VerticalDeviderBuilder");
var BoxLayoutModule = (function () {
    function BoxLayoutModule() {
    }
    BoxLayoutModule.prototype.getDependencies = function () {
        return [common_1.CommonModule, component_1.ComponentModule, scroll_1.ScrollModule, drag_1.DragModule];
    };
    BoxLayoutModule.prototype.register = function (container) {
        container.bind(BoxLayout_1.BoxLayout).toSelf();
        container.bind(VerticalDeviderBuilder_1.VerticalDeviderBuilder).toSelf().inSingletonScope();
        container.bind(HorizontalDeviderBuilder_1.HorizontalDeviderBuilder).toSelf().inSingletonScope();
        container.bind('ComponentBuilder').to(VerticalDeviderBuilder_1.VerticalDeviderBuilder).inSingletonScope().whenTargetNamed('vertical-devider');
        container.bind('ComponentBuilder').to(HorizontalDeviderBuilder_1.HorizontalDeviderBuilder).inSingletonScope().whenTargetNamed('horizontal-devider');
    };
    BoxLayoutModule.prototype.boot = function (container) { };
    return BoxLayoutModule;
}());
exports.BoxLayoutModule = BoxLayoutModule;
//# sourceMappingURL=BoxLayoutModule.js.map