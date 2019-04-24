import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
import { AbsolutePosition } from "../position/AbsolutePosition";
import { Emitter } from "@wildebeest/common";
export declare class HorizontalBlock implements Block {
    protected blueprint: BlockBlueprint;
    constructor(emitter: Emitter, left: AbsolutePosition, right: AbsolutePosition, top: AbsolutePosition);
    bind(element: HTMLElement): void;
    getPositions(): Array<AbsolutePosition>;
}
