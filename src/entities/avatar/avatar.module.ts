import { NgModule } from "@angular/core";
import { AvatarCircleComponent, AvatarPlusComponent } from "./components";
import { AvatarDropZoneDirective } from "./lib";

import { UiKitModule } from 'src/shared/ui';

@NgModule({
    declarations: [
        AvatarCircleComponent,
        AvatarPlusComponent,
        AvatarDropZoneDirective,
    ],
    imports: [UiKitModule],
    exports: [AvatarCircleComponent],
})
export class AvatarModule {}