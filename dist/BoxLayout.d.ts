import { EmitterService, Emitter, ViewportService, DomService } from "@wildebeest/common";
import { HorizontalDeviderBuilder } from "./HorizontalDeviderBuilder";
import { ComponentBuilder, Component } from "@wildebeest/component";
import { VerticalDeviderBuilder } from "./VerticalDeviderBuilder";
import { Block } from "./block/Block";
import { AbsolutePosition } from "./position/AbsolutePosition";
export declare class BoxLayout implements Component {
    static BLOCK_TOP: string;
    static BLOCK_LEFT: string;
    static BLOCK_CENTER: string;
    static BLOCK_RIGHT: string;
    static BLOCK_BOTTOM: string;
    static POSITION_TOP: string;
    static POSITION_RIGHT: string;
    static POSITION_BOTTOM: string;
    static POSITION_LEFT: string;
    protected positions: {
        [key: string]: AbsolutePosition;
    };
    protected blocks: {
        [key: string]: Block;
    };
    protected emitterService: EmitterService;
    protected emitter: Emitter;
    protected viewportService: ViewportService;
    protected domService: DomService;
    protected config: any;
    protected builers: any;
    protected element: HTMLElement;
    constructor(emitterService: EmitterService, viewportService: ViewportService, horizontalBuilder: HorizontalDeviderBuilder, verticalBuilder: VerticalDeviderBuilder, domService: DomService);
    initialize(element: HTMLElement, config: any): void;
    getPositions(): any;
    protected createDragableDevider(block: Block, builder: ComponentBuilder): Component;
    bindElement(element: any, blockName: string): Block;
    getPosition(positionName: string): AbsolutePosition;
    getBlock(blockName: string): Block;
    getEmitter(): Emitter;
    getElement(): HTMLElement;
    recalc(): void;
}
