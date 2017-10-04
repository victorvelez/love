import { NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { CatalogComponent } from "./catalog.component";
import { CatalogItemComponent } from "./catalog-item/catalog-item.component";

@NgModule({
    imports: [ RouterModule,
               BrowserModule ],
    declarations: [ CatalogComponent, CatalogItemComponent ],
    exports: [CatalogComponent, CatalogItemComponent]
})
export class CatalogModule {

}