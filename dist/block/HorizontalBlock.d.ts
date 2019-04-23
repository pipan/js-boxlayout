import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
import { AbsolutePosition } from "../position/AbsolutePosition";
export declare class HorizontalBlock implements Block {
    protected blueprint: BlockBlueprint;
    constructor(left: AbsolutePosition, right: AbsolutePosition, top: AbsolutePosition);
    bind(element: HTMLElement): void;
}
