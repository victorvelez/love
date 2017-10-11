import { Component, Input, OnInit, HostListener } from "@angular/core";
import { Product } from '../../../models';

@Component({
    selector: "lv-item-detail", 
    templateUrl: "./catalog-item-detail.component.html",
    styleUrls: ['./catalog-item-detail.component.scss' ]
})
export class  CatalogItemDetailComponent{ 
    @Input() modalId: string;
    @Input() private product: Product;
  

}
