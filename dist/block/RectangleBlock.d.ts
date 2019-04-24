import { Block } from "./Block";
import { BlockBlueprint } from "./BlockBlueprint";
import { AbsolutePosition } from "../position/AbsolutePosition";
import { Emitter } from "@wildebeest/common";
export declare class RecktangleBlock implements Block {
    protected blueprint: BlockBlueprint;
    constructor(emitter: Emitter, top: AbsolutePosition, right: AbsolutePosition, bottom: AbsolutePosition, left: AbsolutePosition);
    bind(element: HTMLElement): void;
    getPositions(): Array<AbsolutePosition>;
    getEmitter(): Emitter;
}
