import { Module } from "@wildebeest/js-modules";
import { CommonModule } from "@wildebeest/common";
import { DragModule } from "@wildebeest/drag";
import { Container, interfaces } from "inversify";
import { BoxLayout } from "./BoxLayout";
import { HorizontalDeviderBuilder } from "./HorizontalDeviderBuilder";
import { ComponentModule, ComponentBuilder } from "@wildebeest/component";
import { VerticalDeviderBuilder } from "./VerticalDeviderBuilder";

export class BoxLayoutModule implements Module
{
    getDependencies(): Array<any>
    {
        return [CommonModule, ComponentModule, DragModule];
    }

    register(container: Container): void
    {
        container.bind<BoxLayout>(BoxLayout).toSelf();
        container.bind<interfaces.Factory<BoxLayout>>("Factory<BoxLayout>").toAutoFactory(BoxLayout);
        container.bind<ComponentBuilder>('ComponentBuilder').to(VerticalDeviderBuilder).inSingletonScope().whenTargetNamed('vertical-devider');
        container.bind<ComponentBuilder>('ComponentBuilder').to(HorizontalDeviderBuilder).inSingletonScope().whenTargetNamed('horizontal-devider');
    }

    boot(container: Container): void { }
}