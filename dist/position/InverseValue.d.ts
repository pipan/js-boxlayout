import { AbsolutePosition } from "./AbsolutePosition";
import { Binding } from "../binding/Binding";
import { Emitter } from "@wildebeest/common";
export declare class InverseValue implements AbsolutePosition {
    protected position: AbsolutePosition;
    protected bindings: Array<Binding>;
    constructor(position: AbsolutePosition);
    bind(binding: Binding): void;
    getMax(): number;
    getMin(): number;
    moveBy(value: number): void;
    getValue(): number;
    setMax(max: number): void;
    setMin(min: number): void;
    setValue(value: number): void;
    update(): void;
    getEmitter(): Emitter;
}
