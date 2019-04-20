import { Emitter } from "@wildebeest/common";
import { Devider } from "./Devider";

export class InverseLayoutDevider implements Devider
{
    protected position: number = 0;
    protected emitter: Emitter;
    protected relativeTo: number = 0;

    constructor(emitter: Emitter, position: number = 0, relativeTo: number = 0)
    {
        this.emitter = emitter;
        this.position = position;
        this.relativeTo = relativeTo;
    }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }

    public detectChange(): void
    {
        this.emitter.emit('change', this.getAbsolutePosition());
    }

    public setPosition(value: number): void
    {
        let changed: boolean = this.position != value;
        this.position = value;
        if (changed) {
            this.detectChange();
        }
    }

    public setRelativeTo(value: number): void
    {
        let changed: boolean = this.relativeTo != value;
        this.relativeTo = value;
        if (changed) {
            this.detectChange();
        }
    }

    public getPosition(): number
    {
        return this.position;
    }

    public changePositionBy(value: number): void
    {
        this.setPosition(this.getPosition() - value);
    }

    protected getAbsolutePosition(): number
    {
        return this.relativeTo - this.position;
    }

    public hasPosition(value: number): boolean
    {
        return this.position == value;
    }
}