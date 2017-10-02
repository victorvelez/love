import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './../header/header.component';
import { NavBarComponent } from './../navbar/navbar.component';


import { routing, appRoutingProviders } from "./home.routing";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        NavBarComponent
    ],
    providers:[appRoutingProviders],
    bootstrap: [ HomeComponent ]
})
export class HomeModule { }