import { DragableComponent } from "@wildebeest/drag";
import { Emitter } from "@wildebeest/common";

export class DeviderElement
{
    protected element: any;
    protected emitter: Emitter

    constructor(element: any, emitter: Emitter)
    {
        this.element = element;
        this.emitter = emitter;

        new DragableComponent(this.element, this.emitter);
    }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }

    public getElement(): any
    {
        return this.element;
    }
}