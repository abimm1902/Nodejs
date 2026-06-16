import * as couchbase from "couchbase";
import { calculateGST, getCustomerPurchaseHistory, getMonthlyRevenue, getOrderSummary, getProductsAndOrders, getTopSellingProducts } from "./userDefineFun";
import {users,orders,products} from "./collections";

export async function connectDB(): Promise<{
  productsCollection: couchbase.Collection;
  usersCollection: couchbase.Collection;
  ordersCollection: couchbase.Collection;
 }> {
  try {


    
    const cluster = await couchbase.connect(
      "couchbases://cb.wm1mjtm7kzziiz.cloud.couchbase.com",
      {
        username: "Abinaya",
        password: "ruthiksha@M11"
      }
    );


    const bucket = cluster.bucket("inventory");
    const scope = bucket.scope("store");
     const productsCollection = scope.collection("products");
     const usersCollection = scope.collection("users");
     const ordersCollection = scope.collection("orders");

    console.log("Bucket Connected:", bucket.name);
     
    
return {
    productsCollection,
    usersCollection,
    ordersCollection
};
// Insert sample data into the collections
// for (const user of users) {
//   await usersCollection.upsert(user.userId, user);
// }
// console.log(" users inserted successfully");

// for (const product of products) {
//   await productsCollection.upsert(product.products.id, product.products);
// }
// console.log(" products inserted successfully");


// for (const order of orders) {
//   await ordersCollection.upsert(order.id, order);
// }
// console.log(" orders inserted successfully");


//!!----Function Calls----!!//
   // //Retrive all products from the database
//     async function getAllProducts(cluster: any) {
//   const result = await cluster.query(`
//     SELECT *
//     FROM \`inventory\`.\`store\`.\`products\`
//   `);

//   return result.rows;
// }

// const products = await getAllProducts(cluster);
// console.log(products);


//Get Product By ID
// async function getProductById(productId: string) {
//   const result = await productsCollection.get(productId);
//   return result.content;
// }
// const product = await getProductById("product121");
// console.log(product);

//Get Products and Orders
// const data = await getProductsAndOrders(cluster);
// console.log(data);

// //Calculate GST for a given product and quantity
//  const gstData = await calculateGST(cluster, "P101", 5);
//  console.log(gstData);

 // //Get Order Summary
// const orderSummary = await getOrderSummary(cluster);
// console.log(orderSummary);

// //Get Top Selling Products
// const topSellingProducts = await getTopSellingProducts(cluster);
// console.log(topSellingProducts);

// //Get Monthly Revenue
// const monthlyRevenue = await getMonthlyRevenue(cluster);
// console.log(monthlyRevenue);

// //Get Customer Purchase History
// const purchaseHistory = await getCustomerPurchaseHistory(cluster, "user101");
// console.log(purchaseHistory);






  } catch (err) {
    console.error("Connection Error:", err);
    throw new Error("Failed to connect to Couchbase");
  }
}

connectDB();


// export{connectDB};
