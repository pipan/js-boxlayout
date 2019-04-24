import { ViewportService, Emitter } from "@wildebeest/common";
import { AbsolutePosition } from "./AbsolutePosition";
import { Binding } from "../binding/Binding";

export class ScreenVerticalPositionValue implements AbsolutePosition 
{
    protected position: AbsolutePosition;
    
    constructor(position: AbsolutePosition, viewportService: ViewportService)
    {
        this.position = position;
        viewportService.getEmitter().on('change', (event: any) => {
            this.setMax(event.height);
        });
    }

    bind(binding: Binding): void
    {
        this.position.bind(binding);
    }

    getMax(): number
    {
        return this.position.getMax();
    }

    getMin(): number
    {
        return this.position.getMin();
    }

    getValue(): number
    {
        return this.position.getValue();
    }

    moveBy(value: number): void
    {
        this.position.moveBy(value);
    }

    setMax(max: number): void
    {
        this.position.setMax(max);
        this.update();
    }

    setMin(min: number): void
    {
        this.position.setMin(min);
        this.update();
    }

    setValue(value: number): void
    {
        this.position.setValue(value);
        this.update();
    }

    update(): void
    {
        this.position.update();
    }

    getEmitter(): Emitter
    {
        return this.position.getEmitter();
    }
}