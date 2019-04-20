import { Emitter } from "@wildebeest/common";
import { Devider } from "./Devider";
export declare class InverseLayoutDevider implements Devider {
    protected position: number;
    protected emitter: Emitter;
    protected relativeTo: number;
    constructor(emitter: Emitter, position?: number, relativeTo?: number);
    getEmitter(): Emitter;
    detectChange(): void;
    setPosition(value: number): void;
    setRelativeTo(value: number): void;
    getPosition(): number;
    changePositionBy(value: number): void;
    protected getAbsolutePosition(): number;
    hasPosition(value: number): boolean;
}
