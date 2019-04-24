import { Binding } from "../binding/Binding";
import { Block } from "./Block";
import { PixelsBinding } from "../binding/PixelsBinding";
import { AbsolutePosition } from "../position/AbsolutePosition";

export class BlockBlueprint implements Block
{
    protected config: Array<any>;

    constructor(config: Array<any>)
    {
        this.config = config;
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