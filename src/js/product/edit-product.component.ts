import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../models/product.model';

@Component({
    template: require('./edit-product.component.html'),
    selector: 'edit-product'
})
export class EditProductComponent {

    @Input() product: Product;
}