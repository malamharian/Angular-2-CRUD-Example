export class Product {

    public id: number;
    public name: string;
    public quantity: number;

    constructor(id, name, quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }
}