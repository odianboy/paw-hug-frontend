import { NgModule } from "@angular/core";
import { AvatarCircleComponent } from "./components";

import { UiKitModule } from 'src/shared/ui';

@NgModule({
    declarations: [AvatarCircleComponent],
    imports: [UiKitModule],
    exports: [AvatarCircleComponent]
})
export class AvatarModule {}