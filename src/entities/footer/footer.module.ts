import { NgModule } from "@angular/core";
import { UiKitModule } from "src/shared/ui";
import { FooterRowComponent } from "./components";

@NgModule({
    declarations: [FooterRowComponent],
    imports: [UiKitModule],
    exports: [FooterRowComponent],
})
export class FooterModule {}