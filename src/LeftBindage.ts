import { ElementBindage } from "./ElementBindage";
import { injectable } from "inversify";

@injectable()
export class LeftBindage implements ElementBindage
{
    protected element: any;

    constructor() { }

    public initialize(element: any): void
    {
        this.element = element;
    }

    public update(value: any): void
    {
        this.element.style.left = value + "px";
    }
}