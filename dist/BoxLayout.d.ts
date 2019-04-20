import { EmitterService, Emitter, ViewportService, DomService } from "@wildebeest/common";
import { EmptyLayout } from "./EmptyLayout";
import { LayoutDevider } from "./LayoutDevider";
import { DeviderElementBuilder } from "./DeviderElementBuilder";
import { BindageService } from "./BindageService";
export declare class BoxLayout {
    protected layout: EmptyLayout;
    protected emitterService: EmitterService;
    protected emitter: Emitter;
    protected viewportService: ViewportService;
    protected bindageService: BindageService;
    protected deviderBuilderFactory: (name: string) => DeviderElementBuilder;
    protected domService: DomService;
    protected config: any;
    protected blockBindings: any;
    protected deviderBindings: any;
    constructor(emitterService: EmitterService, viewportService: ViewportService, bindageService: BindageService, deviderBuilderFactory: (name: string) => DeviderElementBuilder, domService: DomService);
    initialize(element: any, config: any): void;
    getPositions(): any;
    protected addVerticalDeviderDrag(deviderName: string): any;
    protected addHorizontalDeviderDrag(deviderName: string): any;
    getDevider(name: string): LayoutDevider;
    setBlock(element: any, blockName: string): void;
    getEmitter(): Emitter;
    recalc(): void;
}
