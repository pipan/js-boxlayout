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
import { InverseValue } from "./position/InverseValue";
import { PositionValue } from "./position/PositionValue";
import { Block } from "./block/Block";

@injectable()
export class BoxLayout
{
    public static BLOCK_TOP: string = "top";
    public static BLOCK_LEFT: string = "left";
    public static BLOCK_CENTER: string = "center";
    public static BLOCK_RIGHT: string = "right";
    public static BLOCK_BOTTOM: string = "bottom";

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
            screenTop: new ScreenVerticalPositionValue(new PositionValue(0 , 0, viewportService.getHeight()), viewportService),
            screenRight: new ScreenHorizontalPositionValue(new PositionValue(0 , 0, viewportService.getWidth()), viewportService),
            screenBottom: new ScreenVerticalPositionValue(new PositionValue(0 , 0, viewportService.getHeight()), viewportService),
            screenLeft: new ScreenHorizontalPositionValue(new PositionValue(0 , 0, viewportService.getWidth()), viewportService),
            top: new ScreenVerticalPositionValue(new PositionValue(0 , 0, viewportService.getHeight()), viewportService),
            right: new ScreenHorizontalPositionValue(new PositionValue(0 , 0, viewportService.getWidth()), viewportService),
            bottom: new ScreenVerticalPositionValue(new PositionValue(0 , 0, viewportService.getHeight()), viewportService),
            left: new ScreenHorizontalPositionValue(new PositionValue(0 , 0, viewportService.getWidth()), viewportService)
        };

        this.blueprints = {
            top: new RecktangleBlock(this.positions.screenTop, this.positions.screenRight, new InverseValue(this.positions.top), this.positions.screenLeft),
            left: new RecktangleBlock(this.positions.top, new InverseValue(this.positions.left), this.positions.screenBottom, this.positions.screenLeft),
            center: new RecktangleBlock(this.positions.top, this.positions.right, this.positions.bottom, this.positions.left),
            right: new RecktangleBlock(this.positions.top, this.positions.screenRight, this.positions.bottom, new InverseValue(this.positions.right)),
            bottom: new RecktangleBlock(new InverseValue(this.positions.bottom), this.positions.screenRight, this.positions.screenBottom, this.positions.left),
            deviderLeft: new VerticalBlock(this.positions.top, this.positions.screenBottom, this.positions.left),
            deviderRight: new VerticalBlock(this.positions.top, this.positions.bottom, new InverseValue(this.positions.right)),
            deviderBottom: new HorizontalBlock(this.positions.left, this.positions.screenRight, new InverseValue(this.positions.bottom))
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

        if (config.deviders && config.deviders.dragable) {
            this.createDragableDevider(this.blueprints.deviderLeft, this.builers.vertical).getEmitter().on('wbDrag', (event: any) => {
                this.positions.left.moveBy(event.horizontal);
            });
            this.createDragableDevider(this.blueprints.deviderRight, this.builers.vertical).getEmitter().on('wbDrag', (event: any) => {
                this.positions.right.moveBy(-event.horizontal);
            });
            this.createDragableDevider(this.blueprints.deviderBottom, this.builers.horizontal).getEmitter().on('wbDrag', (event: any) => {
                this.positions.bottom.moveBy(-event.vertical);
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
        this.domService.insert([deviderElement.getElement()], this.element);
        blueprint.bind(deviderElement.getElement());
        return deviderElement;
    }

    public setBlock(element: any, blockName: string): void
    {
        this.blueprints[blockName].bind(element);
    }

    public getBlock(blockName: string): Block
    {
        return this.blueprints[blockName];
    }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }

    public recalc(): void
    {
        for (let key in this.positions) {
            this.positions[key].update();
        }
        this.emitter.emit('wbRecalc', {});
    }
}