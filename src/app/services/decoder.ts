import { ComponentDef } from '@defs/component-def';
import { DynamicMsg } from '@defs/dynamic-msg';
import { Type } from '@angular/core';
import {plainToClass} from 'class-transformer';

export class Decoder {

    public static decode<T>(clz: Type<any>, obj: Object): any {

        // if (clz.prototype === 'DynamicMsg') {
        //     const msg = new DynamicMsg();
        //     return msg.assign(obj);
        // }
        return plainToClass(clz, obj);
    }


    /**
     * Object cast to given class type
     * @param obj Object to cast
     * @param cl Object cast in to this object type
     */
    public static  cast<T>(cl, obj): T {
        obj.__proto__ = cl.prototype;
        return obj;
    }
}

