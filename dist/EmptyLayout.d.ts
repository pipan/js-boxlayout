import { ElementBindage } from "./ElementBindage";
import { Devider } from "./Devider";
import { Emitter } from "@wildebeest/common";
export declare class EmptyLayout {
    protected element: any;
    protected deviders: any;
    protected emitter: Emitter;
    constructor(emitter: Emitter);
    initialize(element: any): void;
    addDevider(name: string, devider: Devider): void;
    setDeviders(deviders: any): void;
    getDeviders(): any;
    getDevider<T extends Devider>(name: string): T;
    getEmitter(): Emitter;
    getElement(): any;
    bindElement(elementBindage: ElementBindage, deviderName: string): void;
}
