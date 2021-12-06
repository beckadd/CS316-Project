import { genSalt, hash } from 'bcrypt';
import { Wallet } from 'src/models/Wallet';
import { Cart } from 'src/models/Cart';
import { Profile, ContactInformation, NameData, Settings } from 'src/models/Profile';
import { Order } from 'src/models/Order';
import { Product } from 'src/models/Product';
import { Review, reviewType } from 'src/models/Review';
import { writeFile } from 'fs';

function generateProfile(): Profile {
    const name: NameData = new NameData(
        fakerStatic.name.firstName(),
        fakerStatic.name.lastName(),
        (Math.random() > 0.5 ? fakerStatic.name.title() : null)
    )
    const contact: ContactInformation = new ContactInformation(
        fakerStatic.internet.email(),
        fakerStatic.phone.phoneNumber()
    )
    const pfp: string = fakerStatic.image.people();

    // const password: string = (await hash(
    //     fakerStatic.random.words(4),
    //     await genSalt(6)
    // ))

    const password: string = 'helloworld';

    return new Profile(name, contact, pfp, password, new Cart(), new Wallet(), new Settings());
}

function generateProduct(sellerProfile: Profile) {
    return new Product(
        sellerProfile.getUID(),
        fakerStatic.datatype.number(2000.00),
        fakerStatic.commerce.productName(),
        fakerStatic.lorem.paragraph(),
        Array.from({ length: fakerStatic.datatype.number(5) }, () => fakerStatic.image.fashion())
    );
}

function generateOrder(products: Product[], sellerProfile: Profile, buyerProfile: Profile) {
    return new Order(
        products,
        buyerProfile.getUID(),
        buyerProfile.wallet.getDefaultPaymentMethod()
    )
}

function generateReview(reviewerProfile: Profile, reviewedID: string) {

    return new Review(
        reviewedID,
        fakerStatic.datatype.number(5),
        fakerStatic.lorem.text(),
        reviewerProfile.getUID(),
        (Math.random() > 0.5 ? reviewType.SellerReview : reviewType.ProductReview)
    )
}

export function populateJSONs(): void {
    var profiles: Profile[] = Array.from(
        { length: 10000 },
        () => generateProfile())

    writeFile('profiles.json', JSON.stringify(profiles), (err) => { if (err) throw err; });

    var products = Array.from(
        { length: 20000000 },
        () => generateProduct(profiles[Math.floor(Math.random() * profiles.length)])
    )

    var orders = Array.from(
        { length: 50000 },
        (_, i) => generateOrder(
            products.slice(i, i + 10), //ten products per order (need to make sure this isn't producing redundant orders of same productIDs)
            profiles[Math.floor(Math.random() * profiles.length)],
            profiles[Math.floor(Math.random() * profiles.length)]
        )
    )

    var reviews = Array.from(
        { length: 100000 },
        () => generateReview(
            profiles[Math.floor(Math.random() * profiles.length)],
            (Math.random() > 0.5 ?
                (profiles[Math.floor(Math.random() * profiles.length)]).getUID() :
                orders[Math.floor(Math.random() * profiles.length)].getUID()))
    )
    //TODO: Write the actual file-writers
}
