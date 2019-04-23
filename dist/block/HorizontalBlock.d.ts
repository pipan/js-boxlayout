import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
export declare class HorizontalBlock implements Block {
    protected blueprint: BlockBlueprint;
    constructor(left: Position, right: Position, top: Position);
    bind(element: HTMLElement): void;
}
