import { Cart } from "./Cart";
import { PaymentMethod, Wallet } from "./Wallet";
import type { Order } from "./Order";
import { v4 as uuidv4 } from 'uuid';
import type { ThrowStatement } from "typescript";

enum profileTypes {
    Buyer,
    Seller
};

enum NameType {
    First,
    Last,
    Full
};

enum Theme {
    Dark,
    Light,
    SysDefault
};

export class Profile {
    constructor(
        public id: string = uuidv4(),
        public type: profileTypes = profileTypes.Buyer,

        public nameData: NameData,
        public contactInformation: ContactInformation,
        public pfp: string,
        private phash: string,

        public cart: Cart = new Cart(),
        public wallet: Wallet = new Wallet(),
        public settings: Settings = new Settings()) { }

    getProfilePicture(): string {
        // returns the URL of the profile picture.
        return this.pfp;
    }

    getDisplayName(): string {
        // controlled by settings - whatever the user has chosen as their display name,
        // out of "first", "title_last", or "full"
        return this.nameData.displayName(this.settings.nameType);
    }

    getUID(): string {
        return this.id;
    }

    makeSeller(): void {
        //changes the type of the profile to a seller profile
        this.type = profileTypes.Seller
    }
}

export class Settings {
    constructor(
        public nameType: NameType = NameType.First,
        public theme: Theme = Theme.SysDefault
    ) { };
};

export class NameData {
    constructor(
        private fname: string,
        private lname: string,
        private title?: string,
    ) { };

    public displayName(nameType: NameType = NameType.First): string {
        switch (nameType) {
            case NameType.Last:
                return `${this.title} ${this.lname}`;
            case NameType.Full:
                return `${this.fname} ${this.lname}`;
            default:
                return `${this.fname}`;
        }
    }

    public getFullName(): string {
        return `${this.fname} ${this.lname}`
    }
};

export class ContactInformation {
    constructor(
        public email: string,
        public phone: string
    ) { };
};