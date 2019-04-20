import { EmptyLayout } from "./EmptyLayout";
import { ElementBindage } from "./ElementBindage";
export declare class BindageService {
    protected elementBindageFactory: (name: string) => ElementBindage;
    constructor(elementBindageFactory: (name: string) => ElementBindage);
    private createBlockBindage;
    bindBlock(layout: EmptyLayout, element: any, bindTo: Array<string>): void;
    bindVertical(layout: EmptyLayout, element: any, bindTo: Array<string>): void;
    bindHorizontal(layout: EmptyLayout, element: any, bindTo: Array<string>): void;
}
