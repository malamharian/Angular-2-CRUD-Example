import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
    selector: 'product-component',
    template: require('./product.component.html'),
    styles: [
        require('./style.css')
    ]
})
export class ProductComponent {

    private edittingProduct: boolean;
    @Input() product: Product;
    @Output() productDeleted = new EventEmitter();

    constructor() {

    }

    deleteProduct() {
        this.productDeleted.emit(this.product.id);
    }

    editProduct() {
        this.edittingProduct = true;
    }

    cancelEditProduct() {
        this.edittingProduct = false;
    }
}