import {Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { NavBarService } from './../navbar/navbar.service'
import { Product } from '../../models';

@Component({
    selector: "lv-catalog", 
    templateUrl: "./catalog.component.html",
    styleUrls: ['./catalog.component.scss' ]
})
export class  CatalogComponent  implements OnInit, OnDestroy{ 

    private products: Product[] = [];
    private categorie: string;
    private _subscription: Subscription;
    constructor(private router: ActivatedRoute, private navBarService: NavBarService){

        }

    public ngOnInit(): void {

       
        this._subscription = this.router.params.subscribe(params => {
            this.categorie = params["categorie"];
        });

        var product: Product = new Product();
        product.id = "1";
        product.brand = "Lorena Velez";
        product.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
        product.details = ["red", "white", "special"];
        product.image = "http://placehold.it/140x100";
        product.price = 50000;
        product.title = "Conjunto 01";
        this.products.push(product);

        product = new Product();
        product.id = "2";
        product.brand = "Lorena Velez";
        product.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
        product.details = ["red", "white", "special"];
        product.image = "http://placehold.it/140x100";
        product.price = 30000;
        product.title = "Conjunto 02";
        this.products.push(product);

        product = new Product();
        product.id = "3";
        product.brand = "Lorena Velez";
        product.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
        product.details = ["red", "white", "special"];
        product.image = "http://placehold.it/140x100";
        product.price = 10000;
        product.title = "Conjunto 03";
        this.products.push(product);

        product = new Product();
        product.id = "4";
        product.brand = "Lorena Velez";
        product.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
        product.details = ["red", "white", "special"];
        product.image = "http://placehold.it/140x100";
        product.price = 35000;
        product.title = "Conjunto 04";

        this.products.push(product);
    }

    public ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

    public getDescription(categoriePath: string):string {
        return this.navBarService.getDescription(categoriePath);
    }
}