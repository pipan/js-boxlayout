import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
import { AbsolutePosition } from "../position/AbsolutePosition";
export declare class RecktangleBlock implements Block {
    protected blueprint: BlockBlueprint;
    constructor(top: AbsolutePosition, right: AbsolutePosition, bottom: AbsolutePosition, left: AbsolutePosition);
    bind(element: HTMLElement): void;
    getPositions(): Array<AbsolutePosition>;
}
