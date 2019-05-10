import { injectable, inject, named } from "inversify";
import { EmitterService, Emitter, ViewportService, DomService } from "@wildebeest/common";
import { HorizontalDeviderBuilder } from "./HorizontalDeviderBuilder";
import { ScreenVerticalPositionValue } from "./position/SceenVerticalPositionValue";
import { ScreenHorizontalPositionValue } from "./position/ScreenHorizontalPositionValue";
import { RecktangleBlock } from "./block/RectangleBlock";
import { VerticalBlock } from "./block/VerticalBlock";
import { HorizontalBlock } from "./block/HorizontalBlock";
import { ComponentBuilder, Component } from "@wildebeest/component";
import { VerticalDeviderBuilder } from "./VerticalDeviderBuilder";
import { InverseValue } from "./position/InverseValue";
import { PositionValue } from "./position/PositionValue";
import { Block } from "./block/Block";
import { AbsolutePosition } from "./position/AbsolutePosition";

@injectable()
export class BoxLayout implements Component
{
    public static BLOCK_TOP: string = "top";
    public static BLOCK_LEFT: string = "left";
    public static BLOCK_CENTER: string = "center";
    public static BLOCK_RIGHT: string = "right";
    public static BLOCK_BOTTOM: string = "bottom";

    public static POSITION_TOP: string = "top";
    public static POSITION_RIGHT: string = "right";
    public static POSITION_BOTTOM: string = "bottom";
    public static POSITION_LEFT: string = "left";

    protected positions: { [key: string]: AbsolutePosition } = {};
    protected blocks: { [key: string]: Block } = {};
    protected emitterService: EmitterService;
    protected emitter: Emitter;
    protected viewportService: ViewportService;
    protected domService: DomService;
    protected config: any = {};
    protected builers: any = {};
    protected element: HTMLElement;

    constructor(@inject(EmitterService) emitterService: EmitterService, @inject(ViewportService) viewportService: ViewportService, @inject('ComponentBuilder') @named('horizontal-devider') horizontalBuilder: HorizontalDeviderBuilder, @inject('ComponentBuilder') @named('vertical-devider') verticalBuilder: VerticalDeviderBuilder, @inject(DomService) domService: DomService)
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

        this.blocks = {
            top: new RecktangleBlock(this.emitterService.createEmitter(), this.positions.screenTop, this.positions.screenRight, new InverseValue(this.positions.top), this.positions.screenLeft),
            left: new RecktangleBlock(this.emitterService.createEmitter(), this.positions.top, new InverseValue(this.positions.left), this.positions.screenBottom, this.positions.screenLeft),
            center: new RecktangleBlock(this.emitterService.createEmitter(), this.positions.top, this.positions.right, this.positions.bottom, this.positions.left),
            right: new RecktangleBlock(this.emitterService.createEmitter(), this.positions.top, this.positions.screenRight, this.positions.bottom, new InverseValue(this.positions.right)),
            bottom: new RecktangleBlock(this.emitterService.createEmitter(), new InverseValue(this.positions.bottom), this.positions.screenRight, this.positions.screenBottom, this.positions.left),
            deviderLeft: new VerticalBlock(this.emitterService.createEmitter(), this.positions.top, this.positions.screenBottom, this.positions.left),
            deviderRight: new VerticalBlock(this.emitterService.createEmitter(), this.positions.top, this.positions.bottom, new InverseValue(this.positions.right)),
            deviderBottom: new HorizontalBlock(this.emitterService.createEmitter(), this.positions.left, this.positions.screenRight, new InverseValue(this.positions.bottom))
        }

        for (let key of ["top", "left", "center", "right", "bottom"]) {
            this.blocks[key].getEmitter().on('resize', (event: any) => {
                this.emitter.emit('blockResize', {
                    blockName: key,
                    positions: event.positions
                });
            });
        }

        for (let key in this.positions) {
            this.positions[key].getEmitter().on('afterUpdate', (event: any) => {
                this.emitter.emit('resize', {
                    position: this.positions[key],
                    value: event.value,
                    min: event.min,
                    max: event.max
                });
            })
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
            this.createDragableDevider(this.blocks.deviderLeft, this.builers.vertical).getEmitter().on('wbDrag', (event: any) => {
                this.positions.left.moveBy(event.horizontal);
            });
            this.createDragableDevider(this.blocks.deviderRight, this.builers.vertical).getEmitter().on('wbDrag', (event: any) => {
                this.positions.right.moveBy(-event.horizontal);
            });
            this.createDragableDevider(this.blocks.deviderBottom, this.builers.horizontal).getEmitter().on('wbDrag', (event: any) => {
                this.positions.bottom.moveBy(-event.vertical);
            });
        }
    }

    public getPositions(): any
    {
        return this.positions;
    }

    protected createDragableDevider(block: Block, builder: ComponentBuilder): Component
    {
        let deviderElement: Component = builder.build({});
        this.domService.insert([deviderElement.getElement()], this.element);
        block.bind(deviderElement.getElement());
        return deviderElement;
    }

    public bindElement(element: any, blockName: string): Block
    {
        this.blocks[blockName].bind(element);
        element.style.position = "absolute";
        element.style.overflow = "hidden";
        return this.getBlock(blockName);
    }

    public getPosition(positionName: string): AbsolutePosition
    {
        return this.positions[positionName];
    }

    public getBlock(blockName: string): Block
    {
        return this.blocks[blockName];
    }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }

    public getElement(): HTMLElement
    {
        return this.element;
    }

    public recalc(): void
    {
        for (let key in this.positions) {
            this.positions[key].update();
        }
    }
}