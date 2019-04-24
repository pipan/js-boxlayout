import { Binding } from "../binding/Binding";
import { Block } from "./Block";
import { PixelsBinding } from "../binding/PixelsBinding";
import { AbsolutePosition } from "../position/AbsolutePosition";
import { Emitter } from "@wildebeest/common";
import { CallbackBinding } from "../binding/CallbackBinding";

export class BlockBlueprint implements Block
{
    protected config: Array<any>;
    protected emitter: Emitter;

    constructor(emitter: Emitter, config: Array<any>)
    {
        this.emitter = emitter;
        this.config = config;

        for (let i = 0; i < config.length; i++) {
            this.config[i].position.bind(new CallbackBinding(() => {
                this.emitter.emit('change', {
                    positions: this.getPositions()
                });
            }))
        }
    }

    bind(element: HTMLElement): void
    {
        for (let i = 0; i < this.config.length; i++) {
            let binding: Binding = new PixelsBinding(element, this.config[i].elementProperty);
            this.config[i].position.bind(binding);
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
}