import { ViewportService, Emitter } from "@wildebeest/common";
import { AbsolutePosition } from "./AbsolutePosition";
import { Binding } from "../binding/Binding";
export declare class ScreenVerticalPositionValue implements AbsolutePosition {
    protected position: AbsolutePosition;
    constructor(position: AbsolutePosition, viewportService: ViewportService);
    bind(binding: Binding): void;
    getMax(): number;
    getMin(): number;
    getValue(): number;
    moveBy(value: number): void;
    setMax(max: number): void;
    setMin(min: number): void;
    setValue(value: number): void;
    update(): void;
    getEmitter(): Emitter;
}
