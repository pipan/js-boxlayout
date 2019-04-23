import { Module } from "@wildebeest/js-modules";
import { CommonModule } from "@wildebeest/common";
import { ScrollModule } from "@wildebeest/scroll";
import { DragModule } from "@wildebeest/drag";
import { Container } from "inversify";
import { BoxLayout } from "./BoxLayout";
import { HorizontalDeviderBuilder } from "./HorizontalDeviderBuilder";
import { ComponentModule } from "@wildebeest/component";
import { VerticalDeviderBuilder } from "./VerticalDeviderBuilder";

export class BoxLayoutModule implements Module
{
    getDependencies(): Array<any>
    {
        return [CommonModule, ComponentModule, ScrollModule, DragModule];
    }

    register(container: Container): void
    {
        container.bind<BoxLayout>(BoxLayout).toSelf();
        container.bind<VerticalDeviderBuilder>(VerticalDeviderBuilder).toSelf().inSingletonScope();
        container.bind<HorizontalDeviderBuilder>(HorizontalDeviderBuilder).toSelf().inSingletonScope();
        container.bind<VerticalDeviderBuilder>('ComponentBuilder').to(VerticalDeviderBuilder).inSingletonScope().whenTargetNamed('vertical-devider');
        container.bind<HorizontalDeviderBuilder>('ComponentBuilder').to(HorizontalDeviderBuilder).inSingletonScope().whenTargetNamed('horizontal-devider');
    }

    boot(container: Container): void { }
}