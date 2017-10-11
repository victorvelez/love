import { NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { CatalogComponent } from "./catalog.component";
import { CatalogItemComponent } from "./catalog-item/catalog-item.component";
import { CatalogItemDetailComponent } from "./catalog-item-detail/catalog-item-detail.component";
import { NavBarService } from "./../navbar/navbar.service";

@NgModule({
    imports: [ RouterModule,
               BrowserModule ],
    providers:[NavBarService],
    declarations: [ CatalogComponent, CatalogItemComponent, CatalogItemDetailComponent ],
    exports: [CatalogComponent, CatalogItemComponent, CatalogItemDetailComponent]
})
export class CatalogModule {

}