import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../models';


@Component({
    selector: 'lv-catalog-item',
    templateUrl: 'catalog-item.component.html',
    styleUrls: [ 'catalog-item.component.scss' ]
})
export class CatalogItemComponent {

    @Input() private item: Product;

    constructor(private router: Router){
        
    }
}

