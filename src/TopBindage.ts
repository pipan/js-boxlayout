import { ElementBindage } from "./ElementBindage";
import { injectable } from "inversify";

@injectable()
export class TopBindage implements ElementBindage
{
    protected element: any;

    constructor() { }

    public initialize(element: any): void
    {
        this.element = element;
    }

    public update(value: any): void
    {
        this.element.style.top = value + "px";
    }
}