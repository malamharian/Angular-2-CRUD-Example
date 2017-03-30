import { Component } from '@angular/core';

import { Product } from './models/product.model';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})
export class AppComponent {
    
    products: Array<Product> = [];
    idCounter: number = 1;

    constructor() {
        this.dev();
    }

    dev() {
        this.products.push(new Product(1, 'Product 1', 45));
        this.products.push(new Product(2, 'Product 2', 12));
        this.idCounter = 3;
    }
    
    addNewProduct(product: Product) {
        product.id = this.idCounter++;
        this.products.push(product);
    }

    deleteProduct(id: number)
    {
        for(var i = 0; i<this.products.length; i++)
        {
            if(this.products[i].id == id)
                this.products.splice(i,1);
        }
    }
}