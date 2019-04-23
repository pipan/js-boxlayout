import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { CommonModule, ViewportService } from '@wildebeest/common';
import { AbsolutePosition } from '../src/position/AbsolutePosition';
import { ScreenHorizontalPositionValue } from '../src/position/ScreenHorizontalPositionValue';
import { ScreenVerticalPositionValue } from '../src/position/SceenVerticalPositionValue';

let app: Application = new Application();
app.run([CommonModule]);
let viewportService: ViewportService = app.getContainer().get(ViewportService);

test("screen resize", () => {
    let vertical: AbsolutePosition = new ScreenVerticalPositionValue(0, viewportService);
    let horizontal: AbsolutePosition = new ScreenHorizontalPositionValue(0, viewportService);

    viewportService.getEmitter().emit("change", {
        vertical: 200,
        horizontal: 300
    });

    vertical.setValue(1000);
    horizontal.setValue(1000);

    expect(vertical.getValue()).toEqual(200);
    expect(horizontal.getValue()).toEqual(300);
})