import { AbsolutePosition } from "./AbsolutePosition";
import { Binding } from "../binding/Binding";
import { CallbackBinding } from "../binding/CallbackBinding";
import { Emitter } from "@wildebeest/common";

export class InverseValue implements AbsolutePosition
{
    protected position: AbsolutePosition;
    protected bindings: Array<Binding> = [];

    constructor(position: AbsolutePosition)
    {
        this.position = position;
        this.position.bind(new CallbackBinding(this.setValue.bind(this)));
    }

    bind(binding: Binding): void 
    {
        this.bindings.push(binding);
    }

    getMax(): number
    {
        return this.position.getMax();
    }

    getMin(): number
    {
        return this.position.getMin();
    }

    moveBy(value: number): void { }

    getValue(): number
    {
        return this.getMax() - this.position.getValue();
    }

    setMax(max: number): void { }
    setMin(min: number): void { }

    setValue(value: number): void
    {
        this.update();
    }

    update(): void
    {
        for (let i = 0; i < this.bindings.length; i++) {
            this.bindings[i].update(this.getValue());
        }
        this.getEmitter().emit('afterUpdate', {
            value: this.getValue(),
            max: this.getMax(),
            min: this.getMin()
        });
    }

    getEmitter(): Emitter
    {
        return this.position.getEmitter();
    }
}