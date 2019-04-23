import { Binding } from "./Binding";
export declare class CallbackBinding implements Binding {
    protected callback: any;
    constructor(callback: any);
    update(value: number): void;
}
