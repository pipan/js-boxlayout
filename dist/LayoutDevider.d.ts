import { Emitter } from "@wildebeest/common";
import { Devider } from "./Devider";
export declare class LayoutDevider implements Devider {
    protected position: number;
    protected emitter: Emitter;
    constructor(emitter: Emitter, position?: number);
    getEmitter(): Emitter;
    detectChange(): void;
    setPosition(value: number): void;
    changePositionBy(value: number): void;
    getPosition(): number;
    hasPosition(value: number): boolean;
}
