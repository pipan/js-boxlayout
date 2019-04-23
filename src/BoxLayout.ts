import { injectable, inject } from "inversify";
import { EmitterService, Emitter, ViewportService, DomService } from "@wildebeest/common";
import { HorizontalDeviderBuilder } from "./HorizontalDeviderBuilder";
import { ScreenVerticalPositionValue } from "./position/SceenVerticalPositionValue";
import { ScreenHorizontalPositionValue } from "./position/ScreenHorizontalPositionValue";
import { RecktangleBlock } from "./block/RectangleBlock";
import { VerticalBlock } from "./block/VerticalBlock";
import { HorizontalBlock } from "./block/HorizontalBlock";
import { BlockBlueprint } from "./block/BlockBlueprint";
import { ComponentBuilder, Component } from "@wildebeest/component";
import { VerticalDeviderBuilder } from "./VerticalDeviderBuilder";

@injectable()
export class BoxLayout
{
    protected positions: any = {};
    protected blueprints: any = {};
    protected emitterService: EmitterService;
    protected emitter: Emitter;
    protected viewportService: ViewportService;
    protected domService: DomService;
    protected config: any = {};
    protected builers: any = {};
    protected element: HTMLElement;

    constructor(@inject(EmitterService) emitterService: EmitterService, @inject(ViewportService) viewportService: ViewportService, @inject(HorizontalDeviderBuilder) horizontalBuilder: HorizontalDeviderBuilder, @inject(VerticalDeviderBuilder) verticalBuilder: VerticalDeviderBuilder, @inject(DomService) domService: DomService)
    {
        this.emitterService = emitterService;
        this.emitter = this.emitterService.createEmitter();
        this.viewportService = viewportService;
        this.domService = domService;
        this.builers = {
            vertical: verticalBuilder,
            horizontal: horizontalBuilder
        };

        this.positions = {
            screenTop: new ScreenVerticalPositionValue(0, viewportService),
            screenRight: new ScreenHorizontalPositionValue(0, viewportService),
            screenBottom: new ScreenVerticalPositionValue(0, viewportService),
            screenLeft: new ScreenHorizontalPositionValue(0, viewportService),
            top: new ScreenVerticalPositionValue(0, viewportService),
            right: new ScreenHorizontalPositionValue(0, viewportService),
            bottom: new ScreenVerticalPositionValue(0, viewportService),
            left: new ScreenHorizontalPositionValue(0, viewportService)
        };

        this.blueprints = {
            top: new RecktangleBlock(this.positions.screenTop, this.positions.screenRight, this.positions.top, this.positions.screenLeft),
            left: new RecktangleBlock(this.positions.top, this.positions.left, this.positions.screenBottom, this.positions.screenLeft),
            center: new RecktangleBlock(this.positions.top, this.positions.right, this.positions.bottom, this.positions.left),
            right: new RecktangleBlock(this.positions.top, this.positions.screenRight, this.positions.bottom, this.positions.right),
            bottom: new RecktangleBlock(this.positions.bottom, this.positions.screenRight, this.positions.screenBottom, this.positions.left),
            deviderLeft: new VerticalBlock(this.positions.top, this.positions.screenBottom, this.positions.left),
            deviderRight: new VerticalBlock(this.positions.top, this.positions.bottom, this.positions.right),
            deviderBottom: new HorizontalBlock(this.positions.left, this.positions.screenRight, this.positions.bottom)
        }
    }

    public initialize(element: HTMLElement, config: any): void
    {
        this.element = element;
        this.config = config;

        this.positions.top.setValue(this.config.top || 0);
        this.positions.right.setValue(this.config.right || 0);
        this.positions.bottom.setValue(this.config.bottom || 0);
        this.positions.left.setValue(this.config.left || 0);

        if (config.deviders.dragable) {
            this.createDragableDevider(this.blueprints.deviderLeft, this.builers.vertical).getEmitter().on('wbDrag', (event: any) => {
                this.positions.left.moveBy(event.horizontal);
            });
            this.createDragableDevider(this.blueprints.deviderRight, this.builers.vertical).getEmitter().on('wbDrag', (event: any) => {
                this.positions.right.moveBy(event.horizontal);
            });
            this.createDragableDevider(this.blueprints.deviderBottom, this.builers.horizontal).getEmitter().on('wbDrag', (event: any) => {
                this.positions.bottom.moveBy(event.vertical);
            });
        }

        // this.getEmitter().on('wbResize', this.onResize.bind(this));
    }

    public getPositions(): any
    {
        return this.positions;
    }

    protected createDragableDevider(blueprint: BlockBlueprint, builder: ComponentBuilder): Component
    {
        let deviderElement: Component = builder.build({});
        this.domService.insert(deviderElement.getElement(), this.element);
        blueprint.bind(deviderElement.getElement());
        return deviderElement;
    }

    public setBlock(element: any, blockName: string): void
    {
        this.blueprints[blockName].bind(element);
    }

    // public onResize(event: any): void
    // {
        
    // }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }

    // public recalc(): void
    // {
    //     let deviders: Array<LayoutDevider> = this.layout.getDeviders();
    //     for (let key in deviders) {
    //         deviders[key].detectChange();
    //     }
    //     this.emitter.emit('wbRecalc', {});
    // }
}