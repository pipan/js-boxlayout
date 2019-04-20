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
var BindageService = (function () {
    function BindageService(elementBindageFactory) {
        this.elementBindageFactory = elementBindageFactory;
    }
    BindageService.prototype.createBlockBindage = function () {
        return {
            'top': this.elementBindageFactory('top'),
            'right': this.elementBindageFactory('right'),
            'bottom': this.elementBindageFactory('bottom'),
            'left': this.elementBindageFactory('left')
        };
    };
    BindageService.prototype.bindBlock = function (layout, element, bindTo) {
        var bindage = this.createBlockBindage();
        for (var key in bindage) {
            bindage[key].initialize(element);
        }
        layout.bindElement(bindage.top, bindTo[0]);
        layout.bindElement(bindage.right, bindTo[1]);
        layout.bindElement(bindage.bottom, bindTo[2]);
        layout.bindElement(bindage.left, bindTo[3]);
    };
    BindageService.prototype.bindVertical = function (layout, element, bindTo) {
        var bindage = this.createBlockBindage();
        for (var key in bindage) {
            bindage[key].initialize(element);
        }
        layout.bindElement(bindage.top, bindTo[0]);
        layout.bindElement(bindage.left, bindTo[1]);
        layout.bindElement(bindage.bottom, bindTo[2]);
    };
    BindageService.prototype.bindHorizontal = function (layout, element, bindTo) {
        var bindage = this.createBlockBindage();
        for (var key in bindage) {
            bindage[key].initialize(element);
        }
        layout.bindElement(bindage.left, bindTo[0]);
        layout.bindElement(bindage.top, bindTo[1]);
        layout.bindElement(bindage.right, bindTo[2]);
    };
    BindageService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('Factory<ElementBindage>')),
        __metadata("design:paramtypes", [Function])
    ], BindageService);
    return BindageService;
}());
exports.BindageService = BindageService;
//# sourceMappingURL=BindageService.js.map