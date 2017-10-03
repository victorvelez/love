import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import { AccessoriesComponent } from "./accessories.component";

@NgModule({
    imports: [ RouterModule ],
    declarations: [ AccessoriesComponent ],
    exports: [AccessoriesComponent]
})
export class AccessoriesModule {
}