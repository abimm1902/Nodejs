import { Product } from "./product.js";
interface CartItem {
    product: Product;
    quantity: number;
}

export class POS {
    private products: Product[] = [];
    private cart: CartItem[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }


    showProducts(): void {
        console.log("\nAvailable Products");
        console.table(this.products);
    }

    addToCart(productId: number, quantity: number): void {

        const product = this.products.find(
            p => p.id === productId
        );

        if (!product) {
            console.log("Product not found");
            return;
        }

        this.cart.push({
            product,
            quantity
        });

        console.log(`${product.name} added to cart`);
    }

    generateBill(): void {

        let total = 0;

        console.log("\n----- RECEIPT -----");

        this.cart.forEach(item => {

            const amount =
                item.product.price * item.quantity;

            total += amount;

            console.log(
                `${item.product.name}
                 x ${item.quantity}
                 = ₹${amount}`
            );
        });

        console.log("-------------------");
        console.log(`Total : ₹${total}`);
    }
}
