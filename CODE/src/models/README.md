This section contains information about the models. Basically, consider these models to represent the data model of MongoDB. There are four important data objects:

## Profile (Profile.ts)
The basic profile of an individual. This also includes the cart and wallet of that indvidual (Cart.ts and Wallet.ts, respectively).

## Order (Order.ts)
An order made on the website. Linked to a buyer profile by a buyer ID in the transaction (Transaction.ts) section. Also linked to a seller in the Product (Product.ts) section. An order is basically a Cart + a Transaction object. Upon ordering, products in that order are given an orderID. 

## Review (Review.ts)
A review about a product or a seller. Linked to the product/seller by a "ratedID" which will be the ID of the product if a product is being reviewed or the ID of a seller if a seller is being reviewed.

## Product (Product.ts)
A product listed by a seller on the website. Linked to the seller by a "sellerID", and (if purchased) linked to an order by "orderID".