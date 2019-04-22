import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { BoxLayoutModule } from '../src/BoxLayoutModule';
import { BindageService } from '../src/BindageService';
import { BoxLayout } from '../src/BoxLayout';
import { LeftBindage } from '../src/LeftBindage';
import { RightBindage } from '../src/RightBindage';
import { TopBindage } from '../src/TopBindage';
import { BottomBindage } from '../src/BottomBIndage';
import { DeviderElementBuilder } from '../src/DeviderElementBuilder';

let app: Application = new Application();
app.run([BoxLayoutModule]);

test("register services", () => {
    expect(app.getContainer().get(BindageService)).toBeInstanceOf(BindageService);
    expect(app.getContainer().get(BoxLayout)).toBeInstanceOf(BoxLayout);

    expect(app.getContainer().getNamed('ElementBindage', 'left')).toBeInstanceOf(LeftBindage);
    expect(app.getContainer().getNamed('ElementBindage', 'right')).toBeInstanceOf(RightBindage);
    expect(app.getContainer().getNamed('ElementBindage', 'top')).toBeInstanceOf(TopBindage);
    expect(app.getContainer().getNamed('ElementBindage', 'bottom')).toBeInstanceOf(BottomBindage);

    let factory: any = app.getContainer().get('Factory<ElementBindage>');
    expect(factory('left')).toBeInstanceOf(LeftBindage);
    expect(factory('right')).toBeInstanceOf(RightBindage);
    expect(factory('top')).toBeInstanceOf(TopBindage);
    expect(factory('bottom')).toBeInstanceOf(BottomBindage);

    factory = app.getContainer().get('Factory<DeviderElementBuilder>');
    expect(factory('vertical')).toBeInstanceOf(DeviderElementBuilder);
    expect(factory('horizontal')).toBeInstanceOf(DeviderElementBuilder);
    expect(app.getContainer().getNamed('ComponentBuilder', 'devider')).toBeInstanceOf(DeviderElementBuilder);
})