import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";

export class RecktangleBlock implements Block
{
    protected blueprint: BlockBlueprint;

    constructor(top: Position, right: Position, bottom: Position, left: Position)
    {
        this.blueprint = new BlockBlueprint([
            {
                elementProperty: 'style.top',
                position: top
            }, {
                elementProperty: 'style.right',
                position: right,
                inverse: true
            }, {
                elementProperty: 'style.bottom',
                position: bottom,
                inverse: true
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
}