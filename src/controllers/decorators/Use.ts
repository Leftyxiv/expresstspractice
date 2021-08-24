import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, propertyKey) || [];
    middlewares.push(middleware);

    Reflect.defineMetadata(MetadataKeys.middleware, middlewares, target, propertyKey);
  };
};