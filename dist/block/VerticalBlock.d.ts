import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
export declare class VerticalBlock implements Block {
    protected blueprint: BlockBlueprint;
    constructor(top: Position, bottom: Position, left: Position);
    bind(element: HTMLElement): void;
}
