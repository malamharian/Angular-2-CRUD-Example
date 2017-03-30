import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
    template: require('./insert-product.component.html'),
    selector: 'insert-product-component'
})
export class InsertProductComponent {

    private productName: string;
    private quantity: number;
    private errorMessage: string;

    @Output() addProduct = new EventEmitter();

    onSubmit() {
        var newProduct = new Product(null, this.productName, this.quantity);
        if(!this.validate())
            return;
        this.addProduct.emit(newProduct);
        this.clearForm();
    }

    validate() {
        if(this.productName == null || this.productName == '')
            this.errorMessage = 'Fill in the product name';
        else if(this.quantity == null)
            this.errorMessage = 'Fill in the quantity';
        else
            this.errorMessage = null;
        
        return this.errorMessage == null;
    }

    clearForm() {
        this.productName = null;
        this.quantity = null;
        this.errorMessage = null;
    }
}