import { Block } from "./Block";
export declare class BlockBlueprint implements Block {
    protected config: Array<any>;
    constructor(config: Array<any>);
    bind(element: HTMLElement): void;
}
