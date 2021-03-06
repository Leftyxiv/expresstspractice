"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.deletee = exports.put = exports.post = exports.get = void 0;
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
require("reflect-metadata");
function routeBinder(method) {
    return function (path) {
        return function (target, key, descriptor) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.post = routeBinder(Methods_1.Methods.post);
exports.put = routeBinder(Methods_1.Methods.put);
exports.deletee = routeBinder(Methods_1.Methods.del);
exports.patch = routeBinder(Methods_1.Methods.patch);
