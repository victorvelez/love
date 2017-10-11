import { Injectable } from "@angular/core";

import { Link } from '../../models';

@Injectable()
export class NavBarService {

    private links: Link[] = [];

    constructor() {
        this.initLinks();
    }

    public initLinks() {
        this.links.push(new Link("Ropa Intima", "ropa-intima"));
        this.links.push(new Link("Accesorios", "accesorios"));
        this.links.push(new Link("Vestidos de baño", "vestidos-de-baño"));
    }

    public getLinks(): Link[] {
        return this.links;
    }

    public getDescription(path: string): string {
        for (var link of this.getLinks()) {
            if (link.path == path) {
                return link.description;
            }
        }
        return "";
    }

}