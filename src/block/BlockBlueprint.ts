import { OneWayBinding } from "../binding/OneWayBinding";
import { Binding } from "../binding/Binding";
import { Block } from "./Block";

export class BlockBlueprint implements Block
{
    protected config: Array<any>;

    constructor(config: Array<any>)
    {
        this.config = config;
    }

    bind(element: HTMLElement): void
    {
        for (let i = 0; i < this.config.length; i++) {
            let binding: Binding = new OneWayBinding(element, this.config[i].elementProperty);
            if (this.config[i].inverse) {
                this.config[i].position.bindInverse(binding);
            } else {
                this.config[i].position.bind(binding);
            }
        }
    }
}