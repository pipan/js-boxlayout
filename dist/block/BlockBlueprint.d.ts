import { Block } from "./Block";
import { AbsolutePosition } from "../position/AbsolutePosition";
export declare class BlockBlueprint implements Block {
    protected config: Array<any>;
    constructor(config: Array<any>);
    bind(element: HTMLElement): void;
    getPositions(): Array<AbsolutePosition>;
}
