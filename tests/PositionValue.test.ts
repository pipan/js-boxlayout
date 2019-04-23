import 'ts-jest';
import { PositionValue } from '../src/position/PositionValue';
import { AbsolutePosition } from '../src/position/AbsolutePosition';
import { Binding } from '../src/binding/Binding';
import { OneWayBinding } from '../src/binding/OneWayBinding';

let position: AbsolutePosition = null;
let object: any = {};

beforeEach(() => {
    object = {
        value: 0
    };
    let binding: Binding = new OneWayBinding(object, "value");
    position = new PositionValue(0, 0, 100);
    position.bind(binding);
});

test("set value", () => {
    position.setValue(20);
    expect(object.value).toEqual(20);
});

test("set value out of bound", () => {
    position.setValue(-2);
    expect(object.value).toEqual(0);

    position.setValue(2000);
    expect(object.value).toEqual(100);
});

test("min change", () => {
    position.setMin(20);
    expect(object.value).toEqual(20);
});

test("max change", () => {
    position.setMax(300);
    position.setValue(400);
    expect(object.value).toEqual(300);
});