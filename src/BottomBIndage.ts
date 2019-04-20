import { ElementBindage } from "./ElementBindage";
import { injectable, inject } from "inversify";
import { ViewportService } from "@wildebeest/common";

@injectable()
export class BottomBindage implements ElementBindage
{
    protected element: any;
    protected viewportService: ViewportService;

    constructor(@inject(ViewportService) viewportService: ViewportService)
    {
        this.viewportService = viewportService;
    }

    public initialize(element: any): void
    {
        this.element = element;
    }

    public update(value: any): void
    {
        this.element.style.bottom = (Math.max(0, this.viewportService.getHeight() - value)) + "px";
    }
}