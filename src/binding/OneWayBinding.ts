import { Binding } from "./Binding";

export class OneWayBinding implements Binding
{
    protected object: any;
    protected key: string;

    constructor(object: any, key: string)
    {
        this.object = object;
        this.key = key;
    }

    update(value: any): void
    {
        let key: string = this.getLastKey();
        let objectProperty: any = this.getObjectProperty()
        this.validateKey(objectProperty, key);
        objectProperty[key] = value;
    }

    protected getLastKey(): string
    {
        return this.key.split(".").pop();
    }

    protected getObjectProperty(): any
    {
        let keys: Array<string> = this.key.split(".");
        keys.pop();
        let objectProperty: any = this.object;
        for (let i = 0; i < keys.length; i++) {
            this.validateKey(objectProperty, keys[i])
            objectProperty = objectProperty[keys[i]];
        }
        return objectProperty;
    }

    protected validateKey(object: any, key: string)
    {
        if (object[key] === undefined) {
            throw 'Property "' + key + '" does not exists';
        }
    }
}