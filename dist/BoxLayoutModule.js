"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@wildebeest/common");
var scroll_1 = require("@wildebeest/scroll");
var drag_1 = require("@wildebeest/drag");
var BoxLayout_1 = require("./BoxLayout");
var LeftBindage_1 = require("./LeftBindage");
var RightBindage_1 = require("./RightBindage");
var TopBindage_1 = require("./TopBindage");
var BottomBIndage_1 = require("./BottomBIndage");
var DeviderElementBuilder_1 = require("./DeviderElementBuilder");
var BindageService_1 = require("./BindageService");
var component_1 = require("@wildebeest/component");
var BoxLayoutModule = (function () {
    function BoxLayoutModule() {
    }
    BoxLayoutModule.prototype.getDependencies = function () {
        return [common_1.CommonModule, component_1.ComponentModule, scroll_1.ScrollModule, drag_1.DragModule];
    };
    BoxLayoutModule.prototype.register = function (container) {
        container.bind(BoxLayout_1.BoxLayout).toSelf();
        container.bind(BindageService_1.BindageService).toSelf().inSingletonScope();
        container.bind('ElementBindage').to(LeftBindage_1.LeftBindage).whenTargetNamed('left');
        container.bind('ElementBindage').to(RightBindage_1.RightBindage).whenTargetNamed('right');
        container.bind('ElementBindage').to(TopBindage_1.TopBindage).whenTargetNamed('top');
        container.bind('ElementBindage').to(BottomBIndage_1.BottomBindage).whenTargetNamed('bottom');
        container.bind('Factory<ElementBindage>').toFactory(function (context) {
            return function (name) {
                return context.container.getNamed('ElementBindage', name);
            };
        });
        container.bind('Factory<DeviderElementBuilder>').toFactory(function (context) {
            var templates = {
                'vertical': '<div class="box-layout__devider box-layout__devider--vertical"></div>',
                'horizontal': '<div class="box-layout__devider box-layout__devider--horizontal"></div>'
            };
            return function (name) {
                var builder = context.container.getNamed('ComponentBuilder', 'devider');
                builder.setTemplate(templates[name]);
                return builder;
            };
        });
        container.bind('ComponentBuilder').to(DeviderElementBuilder_1.DeviderElementBuilder).inSingletonScope().whenTargetNamed('devider');
    };
    BoxLayoutModule.prototype.boot = function (container) { };
    return BoxLayoutModule;
}());
exports.BoxLayoutModule = BoxLayoutModule;
//# sourceMappingURL=BoxLayoutModule.js.map