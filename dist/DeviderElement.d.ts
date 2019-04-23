import { Emitter } from "@wildebeest/common";
export declare class DeviderElement {
    protected element: any;
    protected emitter: Emitter;
    constructor(element: any, emitter: Emitter);
    getEmitter(): Emitter;
    getElement(): any;
}
