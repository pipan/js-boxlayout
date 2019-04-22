import { injectable, inject } from "inversify";
import { EmitterService, Emitter, ViewportService, DomService } from "@wildebeest/common";
import { EmptyLayout } from "./EmptyLayout";
import { LayoutDevider } from "./LayoutDevider";
import { InverseLayoutDevider } from "./InverseLayoutDevider";
import { DeviderElementBuilder } from "./DeviderElementBuilder";
import { BindageService } from "./BindageService";
import { ComponentBuilder } from "@wildebeest/component";

@injectable()
export class BoxLayout
{
    protected layout: EmptyLayout;
    protected emitterService: EmitterService;
    protected emitter: Emitter;
    protected viewportService: ViewportService;
    protected bindageService: BindageService;
    protected deviderBuilderFactory: (name: string) => DeviderElementBuilder;
    protected domService: DomService;
    protected config: any = {};
    protected blockBindings: any = {
        'top': ['screen-top', 'screen-right', 'top', 'screen-left'],
        'left': ['top', 'left', 'screen-bottom', 'screen-left'],
        'center': ['top', 'right', 'bottom', 'left'],
        'right': ['top', 'screen-right', 'bottom', 'right'],
        'bottom': ['bottom', 'screen-right', 'screen-bottom', 'left']
    };
    protected deviderBindings: any = {
        'top': ['screen-top', 'screen-right', 'top', 'screen-left'],
        'left': ['top', 'left', 'screen-bottom'],
        'right': ['top', 'right', 'bottom'],
        'bottom': ['left', 'bottom', 'screen-right']
    };

    constructor(@inject(EmitterService) emitterService: EmitterService, @inject(ViewportService) viewportService: ViewportService, bindageService: BindageService, @inject('Factory<DeviderElementBuilder>') deviderBuilderFactory: (name: string) => DeviderElementBuilder, @inject(DomService) domService: DomService)
    {
        this.emitterService = emitterService;
        this.emitter = this.emitterService.createEmitter();
        this.layout = new EmptyLayout(this.emitter);
        this.viewportService = viewportService;
        this.bindageService = bindageService;
        this.deviderBuilderFactory = deviderBuilderFactory;
        this.domService = domService;
    }

    public initialize(element: any, config: any): void
    {
        this.config = config;
        this.layout.initialize(element);

        let windowWidth = this.viewportService.getWidth();
        let windowHeight = this.viewportService.getHeight();
        
        this.layout.addDevider('screen-top', new LayoutDevider(this.emitterService.createEmitter(), 0));
        this.layout.addDevider('screen-left', new LayoutDevider(this.emitterService.createEmitter(), 0));
        this.layout.addDevider('screen-right', new InverseLayoutDevider(this.emitterService.createEmitter(), 0, windowWidth));
        this.layout.addDevider('screen-bottom', new InverseLayoutDevider(this.emitterService.createEmitter(), 0, windowHeight));

        this.layout.addDevider('top', new LayoutDevider(this.emitterService.createEmitter(), this.config.top || 0));
        this.layout.addDevider('left', new LayoutDevider(this.emitterService.createEmitter(), this.config.left || 0));
        this.layout.addDevider('right', new InverseLayoutDevider(this.emitterService.createEmitter(), this.config.right || 0, windowWidth));
        this.layout.addDevider('bottom', new InverseLayoutDevider(this.emitterService.createEmitter(), this.config.bottom || 0, windowHeight));

        if (config.deviders.drag) {
            this.addVerticalDeviderDrag('left');
            this.addVerticalDeviderDrag('right');    
            this.addHorizontalDeviderDrag('bottom');
        }
``
        this.viewportService.getEmitter().on('change', (event: any) => {
            this.layout.getDevider<InverseLayoutDevider>('right').setRelativeTo(event.width)
            this.layout.getDevider<InverseLayoutDevider>('bottom').setRelativeTo(event.height)
            this.layout.getDevider<InverseLayoutDevider>('screen-right').setRelativeTo(event.width);
            this.layout.getDevider<InverseLayoutDevider>('screen-bottom').setRelativeTo(event.height);
            this.recalc();
        });
    }

    public getPositions(): any
    {
        return {
            top: this.getDevider('top').getPosition(),
            right: this.getDevider('right').getPosition(),
            bottom: this.getDevider('bottom').getPosition(),
            left: this.getDevider('left').getPosition(),
        };
    }

    protected addVerticalDeviderDrag(deviderName: string): any
    {
        let builder: ComponentBuilder = this.deviderBuilderFactory('vertical');
        let devider: LayoutDevider = this.layout.getDevider(deviderName);
        let deviderElement: any = builder.build({
            'devider': devider
        });
        deviderElement.getEmitter().on('wbDrag', (event: any) => {
            devider.changePositionBy(event.horizontal);
        });
        this.domService.insert(deviderElement.getElement(), this.layout.getElement());
        this.bindageService.bindVertical(this.layout, deviderElement.getElement(), this.deviderBindings[deviderName]);
        return deviderElement;
    }

    protected addHorizontalDeviderDrag(deviderName: string): any
    {
        let builder: ComponentBuilder = this.deviderBuilderFactory('horizontal');
        let devider: LayoutDevider = this.layout.getDevider(deviderName);
        let deviderElement: any = builder.build({
            'devider': devider
        });
        deviderElement.getEmitter().on('wbDrag', (event: any) => {
            devider.changePositionBy(event.vertical);
        });
        this.domService.insert(deviderElement.getElement(), this.layout.getElement());
        this.bindageService.bindHorizontal(this.layout, deviderElement.getElement(), this.deviderBindings[deviderName]);
        return deviderElement;
    }

    public getDevider(name: string): LayoutDevider
    {
        return this.layout.getDevider(name);
    }

    public setBlock(element: any, blockName: string): void
    {
        this.bindageService.bindBlock(this.layout, element, this.blockBindings[blockName]);
    }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }

    public recalc(): void
    {
        let deviders: Array<LayoutDevider> = this.layout.getDeviders();
        for (let key in deviders) {
            deviders[key].detectChange();
        }
        this.emitter.emit('wbRecalc', {});
    }
}