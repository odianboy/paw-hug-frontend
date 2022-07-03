import { NgModule } from "@angular/core";
import { UiKitModule } from "src/shared/ui";
import { FooterRowComponent, FooterIconComponent } from "./components";

@NgModule({
    declarations: [FooterRowComponent, FooterIconComponent],
    imports: [UiKitModule],
    exports: [FooterRowComponent, FooterIconComponent],
})
export class FooterModule {}