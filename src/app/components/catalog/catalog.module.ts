import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import { CatalogComponent } from "./catalog.component";

@NgModule({
    imports: [ RouterModule ],
    declarations: [ CatalogComponent ],
    exports: [CatalogComponent]
})
export class CatalogModule {
}