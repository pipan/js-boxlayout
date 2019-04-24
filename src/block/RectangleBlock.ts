import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
import { AbsolutePosition } from "../position/AbsolutePosition";
import { Emitter } from "@wildebeest/common";

export class RecktangleBlock implements Block
{
    protected blueprint: BlockBlueprint;

    constructor(emitter: Emitter, top: AbsolutePosition, right: AbsolutePosition, bottom: AbsolutePosition, left: AbsolutePosition)
    {
        this.blueprint = new BlockBlueprint(emitter, [
            {
                elementProperty: 'style.top',
                position: top
            }, {
                elementProperty: 'style.right',
                position: right
            }, {
                elementProperty: 'style.bottom',
                position: bottom
            }, {
                elementProperty: 'style.left',
                position: left
            }
        ]);

        this.blueprint
    }

    bind(element: HTMLElement): void
    {
        this.blueprint.bind(element);
    }

    getPositions(): Array<AbsolutePosition>
    {
        return this.blueprint.getPositions();
    }
}