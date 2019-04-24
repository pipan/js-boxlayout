import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
import { AbsolutePosition } from "../position/AbsolutePosition";
import { Emitter } from "@wildebeest/common";

export class VerticalBlock implements Block
{
    protected blueprint: BlockBlueprint;

    constructor(emitter: Emitter, top: AbsolutePosition, bottom: AbsolutePosition, left: AbsolutePosition)
    {
        this.blueprint = new BlockBlueprint(emitter, [
            {
                elementProperty: 'style.top',
                position: top
            }, {
                elementProperty: 'style.bottom',
                position: bottom
            }, {
                elementProperty: 'style.left',
                position: left
            }
        ]);
    }

    bind(element: HTMLElement): void
    {
        this.blueprint.bind(element);
    }

    getPositions(): Array<AbsolutePosition>
    {
        return this.blueprint.getPositions();
    }

    getEmitter(): Emitter
    {
        return this.blueprint.getEmitter();
    }
}