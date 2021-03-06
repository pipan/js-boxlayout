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
var DeviderElement_1 = require("./DeviderElement");
var common_1 = require("@wildebeest/common");
var inversify_1 = require("inversify");
var VerticalDeviderBuilder = (function () {
    function VerticalDeviderBuilder(domService, emitterService) {
        this.template = '<div class="box-layout__devider box-layout__devider--vertical"></div>';
        this.domService = domService;
        this.emitterService = emitterService;
    }
    VerticalDeviderBuilder.prototype.build = function (data) {
        var element = this.domService.create(this.template);
        return new DeviderElement_1.DeviderElement(element, this.emitterService.createEmitter());
    };
    VerticalDeviderBuilder.prototype.setTemplate = function (template) {
        this.template = template;
    };
    VerticalDeviderBuilder = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.DomService)), __param(1, inversify_1.inject(common_1.EmitterService)),
        __metadata("design:paramtypes", [common_1.DomService, common_1.EmitterService])
    ], VerticalDeviderBuilder);
    return VerticalDeviderBuilder;
}());
exports.VerticalDeviderBuilder = VerticalDeviderBuilder;
//# sourceMappingURL=VerticalDeviderBuilder.js.map