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
var BottomBindage = (function () {
    function BottomBindage(viewportService) {
        this.viewportService = viewportService;
    }
    BottomBindage.prototype.initialize = function (element) {
        this.element = element;
    };
    BottomBindage.prototype.update = function (value) {
        this.element.style.bottom = (Math.max(0, this.viewportService.getHeight() - value)) + "px";
    };
    BottomBindage = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.ViewportService)),
        __metadata("design:paramtypes", [common_1.ViewportService])
    ], BottomBindage);
    return BottomBindage;
}());
exports.BottomBindage = BottomBindage;
//# sourceMappingURL=BottomBIndage.js.map