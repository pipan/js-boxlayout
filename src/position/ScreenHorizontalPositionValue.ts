import { PositionValue } from "./PositionValue";
import { ViewportService } from "@wildebeest/common";

export class ScreenHorizontalPositionValue extends PositionValue
{
    constructor(value: number, viewportService: ViewportService)
    {
        super(value, 0, viewportService.getWidth());
        viewportService.getEmitter().on('change', (event: any) => {
            this.setMax(event.horizontal);
        });
    }
}