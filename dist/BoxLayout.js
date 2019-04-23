"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@wildebeest/common");
var HorizontalDeviderBuilder_1 = require("./HorizontalDeviderBuilder");
var SceenVerticalPositionValue_1 = require("./position/SceenVerticalPositionValue");
var ScreenHorizontalPositionValue_1 = require("./position/ScreenHorizontalPositionValue");
var RectangleBlock_1 = require("./block/RectangleBlock");
var VerticalBlock_1 = require("./block/VerticalBlock");
var HorizontalBlock_1 = require("./block/HorizontalBlock");
var VerticalDeviderBuilder_1 = require("./VerticalDeviderBuilder");
var BoxLayout = (function () {
    function BoxLayout(emitterService, viewportService, horizontalBuilder, verticalBuilder, domService) {
        this.positions = {};
        this.blueprints = {};
        this.config = {};
        this.builers = {};
        this.emitterService = emitterService;
        this.emitter = this.emitterService.createEmitter();
        this.viewportService = viewportService;
        this.domService = domService;
        this.builers = {
            vertical: verticalBuilder,
            horizontal: horizontalBuilder
        };
        this.positions = {
            screenTop: new SceenVerticalPositionValue_1.ScreenVerticalPositionValue(0, viewportService),
            screenRight: new ScreenHorizontalPositionValue_1.ScreenHorizontalPositionValue(0, viewportService),
            screenBottom: new SceenVerticalPositionValue_1.ScreenVerticalPositionValue(0, viewportService),
            screenLeft: new ScreenHorizontalPositionValue_1.ScreenHorizontalPositionValue(0, viewportService),
            top: new SceenVerticalPositionValue_1.ScreenVerticalPositionValue(0, viewportService),
            right: new ScreenHorizontalPositionValue_1.ScreenHorizontalPositionValue(0, viewportService),
            bottom: new SceenVerticalPositionValue_1.ScreenVerticalPositionValue(0, viewportService),
            left: new ScreenHorizontalPositionValue_1.ScreenHorizontalPositionValue(0, viewportService)
        };
        this.blueprints = {
            top: new RectangleBlock_1.RecktangleBlock(this.positions.screenTop, this.positions.screenRight, this.positions.top, this.positions.screenLeft),
            left: new RectangleBlock_1.RecktangleBlock(this.positions.top, this.positions.left, this.positions.screenBottom, this.positions.screenLeft),
            center: new RectangleBlock_1.RecktangleBlock(this.positions.top, this.positions.right, this.positions.bototm, this.positions.left),
            right: new RectangleBlock_1.RecktangleBlock(this.positions.top, this.positions.screenRight, this.positions.bottom, this.positions.right),
            bottom: new RectangleBlock_1.RecktangleBlock(this.positions.bottom, this.positions.screenRight, this.positions.screenBottom, this.positions.left),
            deviderLeft: new VerticalBlock_1.VerticalBlock(this.positions.top, this.positions.screenBottom, this.positions.left),
            deviderRight: new VerticalBlock_1.VerticalBlock(this.positions.top, this.positions.bottom, this.positions.right),
            deviderBottom: new HorizontalBlock_1.HorizontalBlock(this.positions.left, this.positions.screenRight, this.positions.bottom)
        };
    }
    BoxLayout.prototype.initialize = function (element, config) {
        var _this = this;
        this.element = element;
        this.config = config;
        this.positions.top.setValue(this.config.top || 0);
        this.positions.right.setValue(this.config.right || 0);
        this.positions.bototm.setValue(this.config.bottom || 0);
        this.positions.left.setValue(this.config.left || 0);
        if (config.deviders.dragable) {
            this.createDragableDevider(this.blueprints.deviderLeft, this.builers.vertical).getEmitter().on('wbDrag', function (event) {
                _this.positions.left.moveBy(event.horizontal);
            });
            this.createDragableDevider(this.blueprints.deviderRight, this.builers.vertical).getEmitter().on('wbDrag', function (event) {
                _this.positions.right.moveBy(event.horizontal);
            });
            this.createDragableDevider(this.blueprints.deviderBottom, this.builers.horizontal).getEmitter().on('wbDrag', function (event) {
                _this.positions.bottom.moveBy(event.vertical);
            });
        }
    };
    BoxLayout.prototype.getPositions = function () {
        return this.positions;
    };
    BoxLayout.prototype.createDragableDevider = function (blueprint, builder) {
        var deviderElement = builder.build({});
        this.domService.insert(deviderElement.getElement(), this.element);
        blueprint.bind(deviderElement.getElement());
        return deviderElement;
    };
    BoxLayout.prototype.setBlock = function (element, blockName) {
        this.blueprints[blockName].bind(element);
    };
    BoxLayout.prototype.getEmitter = function () {
        return this.emitter;
    };
    BoxLayout = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.EmitterService)), __param(1, inversify_1.inject(common_1.ViewportService)), __param(2, inversify_1.inject(HorizontalDeviderBuilder_1.HorizontalDeviderBuilder)), __param(3, inversify_1.inject(VerticalDeviderBuilder_1.VerticalDeviderBuilder)), __param(4, inversify_1.inject(common_1.DomService)),
        __metadata("design:paramtypes", [common_1.EmitterService, common_1.ViewportService, HorizontalDeviderBuilder_1.HorizontalDeviderBuilder, VerticalDeviderBuilder_1.VerticalDeviderBuilder, common_1.DomService])
    ], BoxLayout);
    return BoxLayout;
}());
exports.BoxLayout = BoxLayout;
//# sourceMappingURL=BoxLayout.js.map