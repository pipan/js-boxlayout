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
var EmptyLayout_1 = require("./EmptyLayout");
var LayoutDevider_1 = require("./LayoutDevider");
var InverseLayoutDevider_1 = require("./InverseLayoutDevider");
var BindageService_1 = require("./BindageService");
var BoxLayout = (function () {
    function BoxLayout(emitterService, viewportService, bindageService, deviderBuilderFactory, domService) {
        this.config = {};
        this.blockBindings = {
            'top': ['screen-top', 'screen-right', 'top', 'screen-left'],
            'left': ['top', 'left', 'screen-bottom', 'screen-left'],
            'center': ['top', 'right', 'bottom', 'left'],
            'right': ['top', 'screen-right', 'bottom', 'right'],
            'bottom': ['bottom', 'screen-right', 'screen-bottom', 'left']
        };
        this.deviderBindings = {
            'top': ['screen-top', 'screen-right', 'top', 'screen-left'],
            'left': ['top', 'left', 'screen-bottom'],
            'right': ['top', 'right', 'bottom'],
            'bottom': ['left', 'bottom', 'screen-right']
        };
        this.emitterService = emitterService;
        this.emitter = this.emitterService.createEmitter();
        this.layout = new EmptyLayout_1.EmptyLayout(this.emitter);
        this.viewportService = viewportService;
        this.bindageService = bindageService;
        this.deviderBuilderFactory = deviderBuilderFactory;
        this.domService = domService;
    }
    BoxLayout.prototype.initialize = function (element, config) {
        var _this = this;
        this.config = config;
        this.layout.initialize(element);
        var windowWidth = this.viewportService.getWidth();
        var windowHeight = this.viewportService.getHeight();
        this.layout.addDevider('screen-top', new LayoutDevider_1.LayoutDevider(this.emitterService.createEmitter(), 0));
        this.layout.addDevider('screen-left', new LayoutDevider_1.LayoutDevider(this.emitterService.createEmitter(), 0));
        this.layout.addDevider('screen-right', new InverseLayoutDevider_1.InverseLayoutDevider(this.emitterService.createEmitter(), 0, windowWidth));
        this.layout.addDevider('screen-bottom', new InverseLayoutDevider_1.InverseLayoutDevider(this.emitterService.createEmitter(), 0, windowHeight));
        this.layout.addDevider('top', new LayoutDevider_1.LayoutDevider(this.emitterService.createEmitter(), this.config.top || 0));
        this.layout.addDevider('left', new LayoutDevider_1.LayoutDevider(this.emitterService.createEmitter(), this.config.left || 0));
        this.layout.addDevider('right', new InverseLayoutDevider_1.InverseLayoutDevider(this.emitterService.createEmitter(), this.config.right || 0, windowWidth));
        this.layout.addDevider('bottom', new InverseLayoutDevider_1.InverseLayoutDevider(this.emitterService.createEmitter(), this.config.bottom || 0, windowHeight));
        if (config.deviders.drag) {
            this.addVerticalDeviderDrag('left');
            this.addVerticalDeviderDrag('right');
            this.addHorizontalDeviderDrag('bottom');
        }
        "";
        this.viewportService.getEmitter().on('change', function (event) {
            _this.layout.getDevider('right').setRelativeTo(event.width);
            _this.layout.getDevider('bottom').setRelativeTo(event.height);
            _this.layout.getDevider('screen-right').setRelativeTo(event.width);
            _this.layout.getDevider('screen-bottom').setRelativeTo(event.height);
            _this.recalc();
        });
    };
    BoxLayout.prototype.getPositions = function () {
        return {
            top: this.getDevider('top').getPosition(),
            right: this.getDevider('right').getPosition(),
            bottom: this.getDevider('bottom').getPosition(),
            left: this.getDevider('left').getPosition(),
        };
    };
    BoxLayout.prototype.addVerticalDeviderDrag = function (deviderName) {
        var builder = this.deviderBuilderFactory('vertical');
        var devider = this.layout.getDevider(deviderName);
        var deviderElement = builder.build({
            'devider': devider
        });
        deviderElement.getEmitter().on('wbDrag', function (event) {
            devider.changePositionBy(event.horizontal);
        });
        this.domService.insert(deviderElement.getElement(), this.layout.getElement());
        this.bindageService.bindVertical(this.layout, deviderElement.getElement(), this.deviderBindings[deviderName]);
        return deviderElement;
    };
    BoxLayout.prototype.addHorizontalDeviderDrag = function (deviderName) {
        var builder = this.deviderBuilderFactory('horizontal');
        var devider = this.layout.getDevider(deviderName);
        var deviderElement = builder.build({
            'devider': devider
        });
        deviderElement.getEmitter().on('wbDrag', function (event) {
            devider.changePositionBy(event.vertical);
        });
        this.domService.insert(deviderElement.getElement(), this.layout.getElement());
        this.bindageService.bindHorizontal(this.layout, deviderElement.getElement(), this.deviderBindings[deviderName]);
        return deviderElement;
    };
    BoxLayout.prototype.getDevider = function (name) {
        return this.layout.getDevider(name);
    };
    BoxLayout.prototype.setBlock = function (element, blockName) {
        this.bindageService.bindBlock(this.layout, element, this.blockBindings[blockName]);
    };
    BoxLayout.prototype.getEmitter = function () {
        return this.emitter;
    };
    BoxLayout.prototype.recalc = function () {
        var deviders = this.layout.getDeviders();
        for (var key in deviders) {
            deviders[key].detectChange();
        }
        this.emitter.emit('wbRecalc', {});
    };
    BoxLayout = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.EmitterService)), __param(1, inversify_1.inject(common_1.ViewportService)), __param(3, inversify_1.inject('Factory<DeviderElementBuilder>')), __param(4, inversify_1.inject(common_1.DomService)),
        __metadata("design:paramtypes", [common_1.EmitterService, common_1.ViewportService, BindageService_1.BindageService, Function, common_1.DomService])
    ], BoxLayout);
    return BoxLayout;
}());
exports.BoxLayout = BoxLayout;
//# sourceMappingURL=BoxLayout.js.map