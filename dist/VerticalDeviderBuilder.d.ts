import { DomService, EmitterService } from "@wildebeest/common";
import { ComponentBuilder } from "@wildebeest/component";
export declare class VerticalDeviderBuilder implements ComponentBuilder {
    protected template: string;
    protected domService: DomService;
    protected emitterService: EmitterService;
    constructor(domService: DomService, emitterService: EmitterService);
    build(data: any): any;
    setTemplate(template: string): void;
}
