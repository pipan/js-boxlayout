import { AbsolutePosition } from "../position/AbsolutePosition";

export interface Block
{
    bind(element: HTMLElement): void;
    getPositions(): Array<AbsolutePosition>;
}