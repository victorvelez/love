import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogModule }  from './../catalog/catalog.module';
import { NavBarModule }  from './../navbar/navbar.module'

import { HomeComponent } from './home.component';
import { HeaderComponent } from './../header/header.component';


import { routing, appRoutingProviders } from "./home.routing";

@NgModule({
    imports: [
        BrowserModule,
        CatalogModule,
        NavBarModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
    ],
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    providers:[appRoutingProviders],
    bootstrap: [ HomeComponent ]
})
export class HomeModule { }