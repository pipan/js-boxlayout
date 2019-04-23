import { Binding } from "./Binding";
export declare class OneWayBinding implements Binding {
    protected object: any;
    protected key: string;
    constructor(object: any, key: string);
    update(value: any): void;
    protected getLastKey(): string;
    protected getObjectProperty(): any;
    protected validateKey(object: any, key: string): void;
}
