import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AccessoriesComponent } from "../accessories/accessories.component";
import { CatalogComponent } from "../catalog/catalog.component";


const appRoute: Routes = [
    { path: ":categorie", component: CatalogComponent },
    { path: "home", component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);