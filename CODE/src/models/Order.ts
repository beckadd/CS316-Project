import { Cart } from "./Cart";
import type { Profile } from "./Profile";
import type { PaymentMethod } from "./Wallet";
import type { Product } from "./Product";
import { v4 as uuidv4 } from 'uuid';

export class Order extends Cart {
    //An order is just a cart that has been purchased -
    //It also includes information on the payment method
    //and the date of the purchase (a "Transaction")

    transaction: Transaction;

    constructor(public _id: string, products: Product[], buyerID: string, paymentMethod: PaymentMethod, date: string) {
        super(products);
        this.transaction = new Transaction(paymentMethod, date);
    }
}

export class Transaction {
    public id: string = uuidv4()
    constructor(public paymentMethod: PaymentMethod, public date: string) { }

    public getPaymentInfo(): [string, string, string] {
        let paymentDetails = this.paymentMethod.getAnonSummary()
        return [this.id, paymentDetails, this.date]
    }
}

let dat: Order;

