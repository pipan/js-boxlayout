import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { ViewportService, CommonModule } from '@wildebeest/common';
import { AbsolutePosition } from '../src/position/AbsolutePosition';
import { PositionValue } from '../src/position/PositionValue';
import { InverseValue } from '../src/position/InverseValue';
import { ScreenVerticalPositionValue } from '../src/position/SceenVerticalPositionValue';


let app: Application = new Application();
app.run([CommonModule]);
let viewportService: ViewportService = app.getContainer().get(ViewportService);

test("invert position value", () => {
    let position: AbsolutePosition = new PositionValue(0, 0, 100);
    let inverse: AbsolutePosition = new InverseValue(position);

    position.setValue(30);

    expect(inverse.getValue()).toEqual(70);
});

test("invert screen value", () => {
    let position: AbsolutePosition = new ScreenVerticalPositionValue(new PositionValue(20, 0, 100), viewportService);
    let inverse: AbsolutePosition = new InverseValue(position);

    viewportService.getEmitter().emit('change', {
        vertical: 80,
        horizontal: 100
    });

    expect(inverse.getValue()).toEqual(60);
});