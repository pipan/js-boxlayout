import { ElementBindage } from "./ElementBindage";
import { Devider } from "./Devider";
import { Emitter } from "@wildebeest/common";

export class EmptyLayout
{
    protected element: any;
    protected deviders: any = {};
    protected emitter: Emitter;

    constructor(emitter: Emitter)
    {
        this.emitter = emitter;
    }

    public initialize(element: any): void
    {
        this.element = element;
    }

    public addDevider(name: string, devider: Devider): void
    {
        this.deviders[name] = devider;
    }

    public setDeviders(deviders: any): void
    {
        this.deviders = deviders;
    }

    public getDeviders(): any
    {
        return this.deviders;
    }

    public getDevider<T extends Devider>(name: string): T
    {
        return this.deviders[name];
    }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }

    public getElement(): any
    {
        return this.element;
    }

    public bindElement(elementBindage: ElementBindage, deviderName: string)
    {
        this.getDevider(deviderName).getEmitter().on('change', (event: any) => {
            elementBindage.update(event);
            this.emitter.emit('wbAfterUpdate', {
                'devider': deviderName,
                'value': event
            });
        });
    }
}