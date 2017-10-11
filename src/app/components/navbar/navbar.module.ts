import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import {NavBarComponent} from "./navbar.component";
import {NavBarService} from "./navbar.service";

@NgModule({
    imports: [ RouterModule, BrowserModule ],
    declarations: [ NavBarComponent ],
    providers: [ NavBarService ],
    exports: [NavBarComponent]
})
export class NavBarModule {
}