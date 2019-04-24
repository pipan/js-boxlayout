import { Block } from "./Block";
import { AbsolutePosition } from "../position/AbsolutePosition";
import { Emitter } from "@wildebeest/common";
export declare class BlockBlueprint implements Block {
    protected config: Array<any>;
    protected emitter: Emitter;
    constructor(emitter: Emitter, config: Array<any>);
    bind(element: HTMLElement): void;
    getPositions(): Array<AbsolutePosition>;
}
