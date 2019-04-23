import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { BoxLayoutModule } from '../src/BoxLayoutModule';
import { BoxLayout } from '../src/BoxLayout';
import { VerticalDeviderBuilder } from '../src/VerticalDeviderBuilder';
import { HorizontalDeviderBuilder } from '../src/HorizontalDeviderBuilder';

let app: Application = new Application();
app.run([BoxLayoutModule]);

test("register services", () => {
    expect(app.getContainer().get(BoxLayout)).toBeInstanceOf(BoxLayout);

    expect(app.getContainer().getNamed('ComponentBuilder', 'vertical-devider')).toBeInstanceOf(VerticalDeviderBuilder);
    expect(app.getContainer().getNamed('ComponentBuilder', 'horizontal-devider')).toBeInstanceOf(HorizontalDeviderBuilder);
})