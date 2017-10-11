import { NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { CatalogComponent } from "./catalog.component";
import { CatalogItemComponent } from "./catalog-item/catalog-item.component";
import { CatalogItemDetailComponent } from "./catalog-item-detail/catalog-item-detail.component";

@NgModule({
    imports: [ RouterModule,
               BrowserModule ],
    declarations: [ CatalogComponent, CatalogItemComponent, CatalogItemDetailComponent ],
    exports: [CatalogComponent, CatalogItemComponent, CatalogItemDetailComponent]
})
export class CatalogModule {

}