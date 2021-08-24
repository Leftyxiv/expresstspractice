"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function use(middleware) {
    return function (target, propertyKey, descriptor) {
        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target, propertyKey) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, middlewares, target, propertyKey);
    };
}
exports.use = use;
