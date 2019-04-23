import 'ts-jest';
import { OneWayBinding } from '../src/binding/OneWayBinding';
import { Binding } from '../src/binding/Binding';

test("single level property", () => {
    let object: any = {
        name: "",
    };
    let binding: Binding = new OneWayBinding(object, "name");

    binding.update("peter");
    expect(object.name).toEqual("peter");
});

test("milti level property", () => {
    let object: any = {
        level: {
            name: ""
        }
    };
    let binding: Binding = new OneWayBinding(object, "level.name");

    binding.update("peter");
    expect(object.level.name).toEqual("peter");
});

test("no existing property single level", () => {
    let object: any = {
        name: ""
    };
    let binding: Binding = new OneWayBinding(object, "surname");

    expect(() => {
        binding.update("peter");
    }).toThrowError();
});

test("no existing property multi level", () => {
    let object: any = {
        level: {
            name: ""
        }
    };
    let binding: Binding = new OneWayBinding(object, "level.surname");

    expect(() => {
        binding.update("peter");
    }).toThrowError();
});