import { NgModule } from "@angular/core";
import { AvatarCircleComponent, AvatarPlusComponent } from "./components";

import { UiKitModule } from 'src/shared/ui';

@NgModule({
    declarations: [
        AvatarCircleComponent,
        AvatarPlusComponent,
    ],
    imports: [UiKitModule],
    exports: [AvatarCircleComponent]
})
export class AvatarModule {}