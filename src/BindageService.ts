import { injectable, inject } from "inversify";
import { EmptyLayout } from "./EmptyLayout";
import { ElementBindage } from "./ElementBindage";

@injectable()
export class BindageService
{
    protected elementBindageFactory: (name: string) => ElementBindage;

    constructor(@inject('Factory<ElementBindage>') elementBindageFactory: (name: string) => ElementBindage)
    {
        this.elementBindageFactory = elementBindageFactory;
    }

    private createBlockBindage(): any
    {
        return {
            'top': this.elementBindageFactory('top'),
            'right': this.elementBindageFactory('right'),
            'bottom': this.elementBindageFactory('bottom'),
            'left': this.elementBindageFactory('left')
        };
    }

    public bindBlock(layout: EmptyLayout, element: any, bindTo: Array<string>)
    {
        let bindage = this.createBlockBindage();
        for (let key in bindage) {
            bindage[key].initialize(element);
        }
        layout.bindElement(bindage.top, bindTo[0]);
        layout.bindElement(bindage.right, bindTo[1]);
        layout.bindElement(bindage.bottom, bindTo[2]);
        layout.bindElement(bindage.left, bindTo[3]);
    }

    public bindVertical(layout: EmptyLayout, element: any, bindTo: Array<string>)
    {
        let bindage = this.createBlockBindage();
        for (let key in bindage) {
            bindage[key].initialize(element);
        }
        layout.bindElement(bindage.top, bindTo[0]);
        layout.bindElement(bindage.left, bindTo[1]);
        layout.bindElement(bindage.bottom, bindTo[2]);
    }

    public bindHorizontal(layout: EmptyLayout, element: any, bindTo: Array<string>)
    {
        let bindage = this.createBlockBindage();
        for (let key in bindage) {
            bindage[key].initialize(element);
        }
        layout.bindElement(bindage.left, bindTo[0]);
        layout.bindElement(bindage.top, bindTo[1]);
        layout.bindElement(bindage.right, bindTo[2]);
    }
}