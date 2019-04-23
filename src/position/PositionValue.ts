import { Binding } from "../binding/Binding";
import { AbsolutePosition } from './AbsolutePosition';

export class PositionValue implements AbsolutePosition
{
    protected bindings: Array<Binding> = [];
    protected inverseBindings: Array<Binding> = [];
    protected value: number = 0;
    protected min: number;
    protected max: number;

    constructor(value: number, min: number, max: number)
    {
        this.value = value;
        this.min = min;
        this.max = max;
    }

    public bind(binding: Binding): void
    {
        this.bindings.push(binding);
    }

    public bindInverse(binding: Binding): void
    {
        this.inverseBindings.push(binding);
    }

    public setValue(value: number): void
    {
        value = Math.min(Math.max(value, this.min), this.max);
        let changed: boolean = this.value != value;
        this.value = value;
        if (changed) {
            this.update();
        }
    }

    public moveBy(value: number): void
    {
        this.setValue(this.getValue() + value);
    }

    public getValue(): number
    {
        return this.value;
    }

    public update(): void
    {
        for (let i = 0; i < this.bindings.length; i++) {
            this.bindings[i].update(this.value);
        }
        for (let i = 0; i < this.inverseBindings.length; i++) {
            this.inverseBindings[i].update(this.max - this.value);
        }
    }

    public getMax(): number
    {
        return this.max;
    }

    public getMin(): number
    {
        return this.min;
    }

    public setMax(max: number): void
    {
        this.max = max;
        this.setValue(this.getValue());
    }

    public setMin(min: number): void
    {
        this.min = min;
        this.setValue(this.getValue());
    }
}