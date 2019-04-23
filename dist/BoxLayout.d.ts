import { EmitterService, Emitter, ViewportService, DomService } from "@wildebeest/common";
import { HorizontalDeviderBuilder } from "./HorizontalDeviderBuilder";
import { BlockBlueprint } from "./block/BlockBlueprint";
import { ComponentBuilder, Component } from "@wildebeest/component";
import { VerticalDeviderBuilder } from "./VerticalDeviderBuilder";
export declare class BoxLayout {
    protected positions: any;
    protected blueprints: any;
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
    protected createDragableDevider(blueprint: BlockBlueprint, builder: ComponentBuilder): Component;
    setBlock(element: any, blockName: string): void;
    getEmitter(): Emitter;
    recalc(): void;
}
