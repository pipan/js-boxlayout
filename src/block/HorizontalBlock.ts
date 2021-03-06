import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
import { AbsolutePosition } from "../position/AbsolutePosition";
import { Emitter } from "@wildebeest/common";

export class HorizontalBlock implements Block
{
    protected blueprint: BlockBlueprint;

    constructor(emitter: Emitter, left: AbsolutePosition, right: AbsolutePosition, top: AbsolutePosition)
    {
        this.blueprint = new BlockBlueprint(emitter, [
            {
                elementProperty: 'style.left',
                position: left
            }, {
                elementProperty: 'style.right',
                position: right
            }, {
                elementProperty: 'style.top',
                position: top
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