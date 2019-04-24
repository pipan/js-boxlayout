"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PixelsBinding_1 = require("../binding/PixelsBinding");
var CallbackBinding_1 = require("../binding/CallbackBinding");
var BlockBlueprint = (function () {
    function BlockBlueprint(emitter, config) {
        var _this = this;
        this.emitter = emitter;
        this.config = config;
        for (var i = 0; i < config.length; i++) {
            this.config[i].position.bind(new CallbackBinding_1.CallbackBinding(function () {
                _this.emitter.emit('change', {
                    positions: _this.getPositions()
                });
            }));
        }
    }
    BlockBlueprint.prototype.bind = function (element) {
        for (var i = 0; i < this.config.length; i++) {
            var binding = new PixelsBinding_1.PixelsBinding(element, this.config[i].elementProperty);
            this.config[i].position.bind(binding);
            binding.update(this.config[i].position.getValue());
        }
    };
    BlockBlueprint.prototype.getPositions = function () {
        var positions = [];
        for (var i = 0; i < this.config.length; i++) {
            positions.push(this.config[i].position);
        }
        return positions;
    };
    return BlockBlueprint;
}());
exports.BlockBlueprint = BlockBlueprint;
//# sourceMappingURL=BlockBlueprint.js.map