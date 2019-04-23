"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OneWayBinding = (function () {
    function OneWayBinding(object, key) {
        this.object = object;
        this.key = key;
    }
    OneWayBinding.prototype.update = function (value) {
        var key = this.getLastKey();
        var objectProperty = this.getObjectProperty();
        this.validateKey(objectProperty, key);
        objectProperty[key] = value;
    };
    OneWayBinding.prototype.getLastKey = function () {
        return this.key.split(".").pop();
    };
    OneWayBinding.prototype.getObjectProperty = function () {
        var keys = this.key.split(".");
        keys.pop();
        var objectProperty = this.object;
        for (var i = 0; i < keys.length; i++) {
            this.validateKey(objectProperty, keys[i]);
            objectProperty = objectProperty[keys[i]];
        }
        return objectProperty;
    };
    OneWayBinding.prototype.validateKey = function (object, key) {
        if (object[key] === undefined) {
            throw 'Property "' + key + '" does not exists';
        }
    };
    return OneWayBinding;
}());
exports.OneWayBinding = OneWayBinding;
//# sourceMappingURL=OneWayBinding.js.map