import {v4 as uuidv4} from 'uuid';
import type { Order } from './Order';
import type { Profile } from "./Profile";

export class Product {
    constructor(
        public _id: string,
        public sellerID: string,
        public price: number, 
        public name: string, 
        public description: string,
        public imgURLs: string[] = ["https://via.placeholder.com/150"],
        public quantity: number = 1,
        public featuredImgURL: string = "https://via.placeholder.com/150",
        public category: string = 'Uncategorized',
        public subcategory?: string,
        public order?: Order) {}
}