import { Emitter } from "@wildebeest/common";
import { Devider } from "./Devider";

export class LayoutDevider implements Devider
{
    protected position: number = 0;
    protected emitter: Emitter;

    constructor(emitter: Emitter, position: number = 0)
    {
        this.emitter = emitter;
        this.position = position;
    }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }

    public detectChange(): void
    {
        this.emitter.emit('change', this.getPosition());
    }

    public setPosition(value: number): void
    {
        let changed: boolean = this.position != value;
        this.position = value;
        if (changed) {
            this.detectChange();
        }
    }

    public changePositionBy(value: number): void
    {
        this.setPosition(this.getPosition() + value);
    }

    public getPosition(): number
    {
        return this.position;
    }

    public hasPosition(value: number): boolean
    {
        return this.position == value;
    }
}