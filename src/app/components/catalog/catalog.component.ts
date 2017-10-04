import {Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";

import { Product } from '../../models';

@Component({
    selector: "lv-catalog", 
    templateUrl: "./catalog.component.html",
    styleUrls: ['./catalog.component.scss' ]
})
export class  CatalogComponent  implements OnInit, OnDestroy{ 

    private products: Product[] = [];

    public ngOnInit(): void {
        var product: Product = new Product();
        product._id = 1;
        product.brand = "Lorena Velez";
        product.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
        product.details = ["red", "white", "special"];
        product.image = "http://placehold.it/400x300";
        product.price = 50000;
        product.title = "Conjunto 01";
        this.products.push(product);

        product = new Product();
        product._id = 2;
        product.brand = "Lorena Velez";
        product.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
        product.details = ["red", "white", "special"];
        product.image = "http://placehold.it/400x300";
        product.price = 30000;
        product.title = "Conjunto 02";
        this.products.push(product);

        product = new Product();
        product._id = 3;
        product.brand = "Lorena Velez";
        product.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
        product.details = ["red", "white", "special"];
        product.image = "http://placehold.it/400x300";
        product.price = 10000;
        product.title = "Conjunto 03";
        this.products.push(product);

        product = new Product();
        product._id = 4;
        product.brand = "Lorena Velez";
        product.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
        product.details = ["red", "white", "special"];
        product.image = "http://placehold.it/400x300";
        product.price = 35000;
        product.title = "Conjunto 04";

        this.products.push(product);
    }

    public ngOnDestroy(): void {
      
    }
}