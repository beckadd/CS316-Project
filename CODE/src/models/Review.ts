export enum reviewType {
    SellerReview,
    ProductReview,
    BuyerReview
}

export class Review {
    constructor(
        public ratedID: string,
        public rating: number, 
        public description: string,
        public reviewerID: string,
        public reviewType: reviewType) {
        this.rating = rating;
        this.description = description;
    }
}

