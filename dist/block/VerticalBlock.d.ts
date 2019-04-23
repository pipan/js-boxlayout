import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
import { AbsolutePosition } from "../position/AbsolutePosition";
export declare class VerticalBlock implements Block {
    protected blueprint: BlockBlueprint;
    constructor(top: AbsolutePosition, bottom: AbsolutePosition, left: AbsolutePosition);
    bind(element: HTMLElement): void;
}
