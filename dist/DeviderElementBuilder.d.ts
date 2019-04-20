import { Builder } from "@wildebeest/scroll";
import { DomService, EmitterService } from "@wildebeest/common";
export declare class DeviderElementBuilder implements Builder {
    protected template: string;
    protected domService: DomService;
    protected emitterService: EmitterService;
    constructor(domService: DomService, emitterService: EmitterService);
    build(data: any): any;
    setTemplate(template: string): void;
}
