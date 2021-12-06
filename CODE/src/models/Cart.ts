import type { Product } from "./Product";

export class Cart {
    //Currently just a list of products.
    constructor(public items: Product[] = []) { }

    getSubtotal() {
        this.items.reduce((sum, prod) => sum + prod.price, 0);
    }

    addItem(item: Product) {
        this.items.push(item)
    }

    removeItem(item: Product) {
        this.items = this.items.filter(product => product !== item)
    }
}