export function TrackType(type: any) {
    return function(target: any, propertyKey: string) {
        Reflect.defineMetadata('design:type', type, target, propertyKey);
    };
}
