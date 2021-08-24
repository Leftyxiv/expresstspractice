import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import 'reflect-metadata';


function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const deletee = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);