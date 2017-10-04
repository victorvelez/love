import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogModule }  from './../catalog/catalog.module';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './../header/header.component';
import { NavBarComponent } from './../navbar/navbar.component';
import { AccessoriesComponent } from './../accessories/accessories.component';


import { routing, appRoutingProviders } from "./home.routing";

@NgModule({
    imports: [
        BrowserModule,
        CatalogModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        NavBarComponent,
        AccessoriesComponent
    ],
    providers:[appRoutingProviders],
    bootstrap: [ HomeComponent ]
})
export class HomeModule { }