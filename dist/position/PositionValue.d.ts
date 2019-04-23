import { Binding } from "../binding/Binding";
import { AbsolutePosition } from './AbsolutePosition';
export declare class PositionValue implements AbsolutePosition {
    protected bindings: Array<Binding>;
    protected inverseBindings: Array<Binding>;
    protected value: number;
    protected min: number;
    protected max: number;
    constructor(value: number, min: number, max: number);
    bind(binding: Binding): void;
    bindInverse(binding: Binding): void;
    setValue(value: number): void;
    moveBy(value: number): void;
    getValue(): number;
    update(): void;
    getMax(): number;
    getMin(): number;
    setMax(max: number): void;
    setMin(min: number): void;
}
