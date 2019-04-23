import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";

export class HorizontalBlock implements Block
{
    protected blueprint: BlockBlueprint;

    constructor(left: Position, right: Position, top: Position)
    {
        this.blueprint = new BlockBlueprint([
            {
                elementProperty: 'style.left',
                position: left
            }, {
                elementProperty: 'style.right',
                position: right,
                inverse: true
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