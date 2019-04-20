import { Devider } from "./Devider";
import { DragableElement } from "@wildebeest/drag";
import { Emitter } from "@wildebeest/common";

export class DeviderElement
{
    protected devider: Devider;
    protected element: any;
    protected emitter: Emitter

    constructor(element: any, devider: Devider, emitter: Emitter)
    {
        this.element = element;
        this.devider = devider;
        this.emitter = emitter;

        new DragableElement(this.element, this.emitter);
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