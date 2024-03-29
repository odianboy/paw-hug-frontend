import { NgModule } from "@angular/core";
import { AvatarModule } from "src/entities/avatar";
import { FooterModule } from "src/entities/footer";
import { HeaderModule } from "src/entities/header";

import { SharedModule } from "src/shared/lib";
import { UiKitModule } from "src/shared/ui";

import { RegistrationRoutingModule } from "./registration-routing.module";
import { RegistrationPage } from "./registration.page";

@NgModule({
    declarations: [
        RegistrationPage,
    ],
    imports: [
        RegistrationRoutingModule,
        HeaderModule,
        SharedModule,
        UiKitModule,
        AvatarModule,
        FooterModule,
    ],
})
export class RegistrationModule {}