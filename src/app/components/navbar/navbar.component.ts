import { Component, OnInit} from "@angular/core";
import { Link } from '../../models';
import { NavBarService } from './navbar.service';

@Component({
    selector: "lv-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ['./navbar.component.scss' ]
})
export class  NavBarComponent implements OnInit{ 

    constructor(private navBarService:NavBarService ){

    }

    private links: Link[] = [];

    public ngOnInit(): void {
        this.links = this.navBarService.getLinks();
    }
    
}