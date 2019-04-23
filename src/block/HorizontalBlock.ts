import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
import { AbsolutePosition } from "../position/AbsolutePosition";

export class HorizontalBlock implements Block
{
    protected blueprint: BlockBlueprint;

    constructor(left: AbsolutePosition, right: AbsolutePosition, top: AbsolutePosition)
    {
        this.blueprint = new BlockBlueprint([
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
}