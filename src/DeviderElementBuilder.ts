import { DeviderElement } from "./DeviderElement";
import { DomService, EmitterService } from "@wildebeest/common";
import { inject, injectable } from "inversify";
import { ComponentBuilder } from "@wildebeest/component";

@injectable()
export class DeviderElementBuilder implements ComponentBuilder
{
    protected template: string;
    protected domService: DomService;
    protected emitterService: EmitterService;

    constructor(@inject(DomService) domService: DomService, @inject(EmitterService) emitterService: EmitterService)
    {
        this.template = '<div class="box-layout__devider"></div>'    
        this.domService = domService;
        this.emitterService = emitterService;
    }

    build(data: any): any
    {
        let element = this.domService.create(this.template);
        return new DeviderElement(element, data.devider, this.emitterService.createEmitter());
    }

    setTemplate(template: string): void
    {
        this.template = template;
    }
}