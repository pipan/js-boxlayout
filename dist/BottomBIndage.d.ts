import { ElementBindage } from "./ElementBindage";
import { ViewportService } from "@wildebeest/common";
export declare class BottomBindage implements ElementBindage {
    protected element: any;
    protected viewportService: ViewportService;
    constructor(viewportService: ViewportService);
    initialize(element: any): void;
    update(value: any): void;
}
