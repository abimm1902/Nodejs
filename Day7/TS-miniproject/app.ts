import { POS } from "./cart.js";
const pos = new POS();

pos.addProduct({
    id: 1,
    name: "Rice",
    price: 50
});

pos.addProduct({
    id: 2,
    name: "Milk",
    price: 30
});

pos.addProduct({
    id: 3,
    name: "Bread",
    price: 40
});

pos.showProducts();

pos.addToCart(1, 2);
pos.addToCart(2, 3);
pos.addToCart(3, 1);

pos.generateBill();
