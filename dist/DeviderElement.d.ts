import { Devider } from "./Devider";
import { Emitter } from "@wildebeest/common";
export declare class DeviderElement {
    protected devider: Devider;
    protected element: any;
    protected emitter: Emitter;
    constructor(element: any, devider: Devider, emitter: Emitter);
    getEmitter(): Emitter;
    getElement(): any;
}
