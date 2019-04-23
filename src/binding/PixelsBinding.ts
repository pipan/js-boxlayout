import { Binding } from "./Binding";
import { OneWayBinding } from "./OneWayBinding";

export class PixelsBinding implements Binding
{
    protected oneWay: OneWayBinding;
    
    constructor(object: any, key: string)
    {
        this.oneWay = new OneWayBinding(object, key);
    }

    public update(value: any): void
    {
        this.oneWay.update(value + "px");
    }
}