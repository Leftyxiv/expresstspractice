import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function validateBody(...keys: string[]) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, propertyKey);
  }
}