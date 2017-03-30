import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { InsertProductComponent } from './product/insert-product.component';
import { EditProductComponent } from './product/edit-product.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ProductComponent,
        InsertProductComponent,
        EditProductComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}