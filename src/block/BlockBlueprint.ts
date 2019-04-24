import { Binding } from "../binding/Binding";
import { Block } from "./Block";
import { PixelsBinding } from "../binding/PixelsBinding";
import { AbsolutePosition } from "../position/AbsolutePosition";
import { Emitter } from "@wildebeest/common";
import { CallbackBinding } from "../binding/CallbackBinding";

export class BlockBlueprint implements Block
{
    protected config: Array<{position: AbsolutePosition, elementProperty: string}>;
    protected emitter: Emitter;

    constructor(emitter: Emitter, config: Array<any>)
    {
        this.emitter = emitter;
        this.config = config;

        for (let i = 0; i < config.length; i++) {
            this.config[i].position.getEmitter().on('afterUpdate', (event: any) => {
                this.emitter.emit('resize', {
                    positions: this.getPositions()
                });
            });
        }
    }

    bind(element: HTMLElement): void
    {
        for (let i = 0; i < this.config.length; i++) {
            let binding: Binding = new PixelsBinding(element, this.config[i].elementProperty);
            this.config[i].position.bind(binding);
            this.config[i].position.update();
        }
    }

    getPositions(): Array<AbsolutePosition>
    {
        let positions: Array<AbsolutePosition> = [];
        for (let i = 0; i < this.config.length; i++) {
            positions.push(this.config[i].position)
        }
        return positions;
    }

    getEmitter(): Emitter
    {
        return this.emitter;
    }
}