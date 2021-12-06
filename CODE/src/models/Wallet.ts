import type { Transaction } from "./Order";

export class Wallet {
    //The wallet class. It contains a list of payment methods
    //and the ability to fetch a payment history that is taken from the order list of
    //the user.

    public defaultPM: PaymentMethod;

    constructor(public paymentMethods: PaymentMethod[] = [], public wallet: WalletPay = new WalletPay(0)) { 
        this.defaultPM = wallet;
    }

    addFunds(wallet: WalletPay, paymentMethod: PaymentMethod = this.getDefaultPaymentMethod(), amount = 0): void { 
        wallet.balance += amount
    }

    pay(paymentMethod: PaymentMethod = this.defaultPM, amount = 0) {
        paymentMethod.provideFunds(amount)
    }

    getDefaultPaymentMethod() {
        return this.defaultPM;
    }

    addPaymentMethod(paymentMethod: PaymentMethod, isDefault: boolean = false): void {
        if (paymentMethod instanceof WalletPay) {
            throw new TypeError('You cannot add another Wallet to the set of available payment methods.')
        }
        
        this.paymentMethods.push(paymentMethod)

        if (isDefault) {
            this.defaultPM = paymentMethod
        }
    }

    removePaymentMethod(paymentMethod: PaymentMethod): void {
        this.paymentMethods = this.paymentMethods.filter(PM => PM !== paymentMethod)
    }

    changeDefaultPaymentMethod(paymentMethod: PaymentMethod): void {
        if (this.paymentMethods.includes(paymentMethod)) {
            this.defaultPM = paymentMethod
        } else {
            throw new ReferenceError("this payment method isn't in your set of available payment methods.")
        }        
    }
}

export abstract class PaymentMethod {
    abstract getAnonSummary(): string;
    abstract provideFunds(value: number): number
}

export class CreditCard implements PaymentMethod {
    constructor(public cardNumber: string, public cvc: string) { }
    getAnonSummary(): string {
        return 'Credit: helloworld';
    }

    provideFunds(value: number): number {
        return value
    }
}

export class ApplePay implements PaymentMethod {
    constructor(public AppleID: string) { }

    getAnonSummary(): string {
        return 'Apple Pay: helloworld';
    }

    provideFunds(value: number): number {
        return value
    }
}

export class GooglePay implements PaymentMethod {

    constructor(public GoogleAcc: string) { }
    getAnonSummary(): string {
        return 'Google Pay: helloworld';
    }

    provideFunds(value: number): number {
        return value
    }
}

export class WalletPay implements PaymentMethod {
    constructor(public balance: number) { }
    getAnonSummary(): string {
        return 'Paid with Wallet Balance';
    }

    provideFunds(value: number): number {
        if (value >= this.balance) {
            this.balance -= value
            return value
        } else {
            throw new EvalError('Not Enough Money!')
        }
    }
}
