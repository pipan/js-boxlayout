import { PositionValue } from "./PositionValue";
import { ViewportService } from "@wildebeest/common";

export class ScreenVerticalPositionValue extends PositionValue
{
    constructor(value: number, viewportService: ViewportService)
    {
        super(value, 0, viewportService.getHeight());
        viewportService.getEmitter().on('change', (event: any) => {
            this.setMax(event.vertical);
        });
    }
}