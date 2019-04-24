import { Emitter } from "@wildebeest/common";
import { Binding } from "../binding/Binding";

export interface AbsolutePosition
{
    bind(binding: Binding): void;
    setValue(value: number): void;
    moveBy(value: number): void
    getValue(): number;
    setMin(min: number): void;
    setMax(max: number): void;
    getMin(): number;
    getMax(): number;
    update(): void;
    getEmitter(): Emitter;
}