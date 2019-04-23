import { Binding } from "./Binding";

export class CallbackBinding implements Binding
{
    protected callback: any;

    constructor(callback: any)
    {
        this.callback = callback;
    }

    update(value: number): void
    {
        this.callback(value);
    }
}