import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
export declare class RecktangleBlock implements Block {
    protected blueprint: BlockBlueprint;
    constructor(top: Position, right: Position, bottom: Position, left: Position);
    bind(element: HTMLElement): void;
}
