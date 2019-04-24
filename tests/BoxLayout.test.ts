import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { DomService, ViewportService } from '@wildebeest/common';
import { BoxLayout } from '../src/BoxLayout';
import { BoxLayoutModule } from '../src/BoxLayoutModule';

let app: Application = new Application();
app.run([BoxLayoutModule]);
let domService: DomService = app.getContainer().get(DomService);
let viewportService: ViewportService = app.getContainer().get(ViewportService);

test("resize screen", () => {
    let boxLayout: BoxLayout = app.getContainer().get(BoxLayout);
    let element: HTMLElement = domService.create('<div><div class="top"></div><div class="left"></div><div class="center"></div><div class="right"></div><div class="bottom"></div></div>');
    boxLayout.initialize(element, {
        top: 80,
        left: 200,
        right: 200,
        bottom: 100
    });
    boxLayout.bindElement(element.querySelector('.top'), BoxLayout.BLOCK_TOP);
    boxLayout.bindElement(element.querySelector('.left'), BoxLayout.BLOCK_LEFT);
    boxLayout.bindElement(element.querySelector('.center'), BoxLayout.BLOCK_CENTER);
    boxLayout.bindElement(element.querySelector('.right'), BoxLayout.BLOCK_RIGHT);
    boxLayout.bindElement(element.querySelector('.bottom'), BoxLayout.BLOCK_BOTTOM);

    viewportService.getEmitter().emit('change', {
        vertical: 400,
        horizontal: 900
    });

    expect(boxLayout.getBlock(BoxLayout.BLOCK_CENTER).getPositions()[1].getValue()).toEqual(200);
    expect(boxLayout.getBlock(BoxLayout.BLOCK_RIGHT).getPositions()[3].getValue()).toEqual(700);
});