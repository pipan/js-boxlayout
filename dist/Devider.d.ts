import { Emitter } from "@wildebeest/common";
export interface Devider {
    getEmitter(): Emitter;
    setPosition(value: number): void;
    getPosition(): number;
    hasPosition(value: number): boolean;
    detectChange(): void;
    changePositionBy(value: number): void;
}
