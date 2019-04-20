import { ElementBindage } from "./ElementBindage";
export declare class TopBindage implements ElementBindage {
    protected element: any;
    constructor();
    initialize(element: any): void;
    update(value: any): void;
}
