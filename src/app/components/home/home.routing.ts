import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AccessoriesComponent } from "../accessories/accessories.component";

const appRoute: Routes = [
    { path: "home", component: HomeComponent },
    { path: "accesorios", component: AccessoriesComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);