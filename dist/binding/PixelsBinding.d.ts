import { Binding } from "./Binding";
import { OneWayBinding } from "./OneWayBinding";
export declare class PixelsBinding implements Binding {
    protected oneWay: OneWayBinding;
    constructor(object: any, key: string);
    update(value: any): void;
}
