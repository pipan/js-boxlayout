import { AbsolutePosition } from "../position/AbsolutePosition";
import { Emitter } from "@wildebeest/common";

export interface Block
{
    bind(element: HTMLElement): void;
    getPositions(): Array<AbsolutePosition>;
    getEmitter(): Emitter;
}