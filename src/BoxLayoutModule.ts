import { Module } from "@wildebeest/js-modules";
import { CommonModule } from "@wildebeest/common";
import { ScrollModule } from "@wildebeest/scroll";
import { DragModule } from "@wildebeest/drag";
import { Container, interfaces } from "inversify";
import { BoxLayout } from "./BoxLayout";
import { LeftBindage } from "./LeftBindage";
import { RightBindage } from "./RightBindage";
import { ElementBindage } from "./ElementBindage";
import { TopBindage } from "./TopBindage";
import { BottomBindage } from "./BottomBIndage";
import { DeviderElementBuilder } from "./DeviderElementBuilder";
import { BindageService } from "./BindageService";
import { ComponentModule, ComponentBuilder } from "@wildebeest/component";

export class BoxLayoutModule implements Module
{
    getDependencies(): Array<any>
    {
        return [CommonModule, ComponentModule, ScrollModule, DragModule];
    }

    register(container: Container): void
    {
        container.bind<BoxLayout>(BoxLayout).toSelf();
        container.bind<BindageService>(BindageService).toSelf().inSingletonScope();
        container.bind<LeftBindage>('ElementBindage').to(LeftBindage).whenTargetNamed('left');
        container.bind<RightBindage>('ElementBindage').to(RightBindage).whenTargetNamed('right');
        container.bind<TopBindage>('ElementBindage').to(TopBindage).whenTargetNamed('top');
        container.bind<BottomBindage>('ElementBindage').to(BottomBindage).whenTargetNamed('bottom');

        container.bind<interfaces.Factory<ElementBindage>>('Factory<ElementBindage>').toFactory<ElementBindage>((context: interfaces.Context) => {
            return (name: string) => {
                return context.container.getNamed('ElementBindage', name);
            };
        });

        container.bind<interfaces.Factory<DeviderElementBuilder>>('Factory<DeviderElementBuilder>').toFactory<DeviderElementBuilder>((context: interfaces.Context) => {
            let templates: any = {
                'vertical': '<div class="box-layout__devider box-layout__devider--vertical"></div>',
                'horizontal': '<div class="box-layout__devider box-layout__devider--horizontal"></div>'
            };
            return (name: string) => {
                let builder: any = context.container.getNamed('ComponentBuilder', 'devider');
                builder.setTemplate(templates[name]);
                return builder;
            };
        });
        container.bind<ComponentBuilder>('ComponentBuilder').to(DeviderElementBuilder).inSingletonScope().whenTargetNamed('devider');
    }

    boot(container: Container): void { }
}