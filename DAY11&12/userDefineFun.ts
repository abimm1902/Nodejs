// Function to get products and their corresponding orders from the database
export async function getProductsAndOrders(cluster: any) {
  const query = `
    SELECT
      p.name,
      o.orderId,
      o.quantity
    FROM \`inventory\`.\`store\`.\`products\` p
    JOIN \`inventory\`.\`store\`.\`orders\` o
    ON p.productId = o.productId`;

  const result = await cluster.query(query);

  return result.rows;
}


//Calculate GST for a given product and quantity

export async function calculateGST(
  cluster: any,
  productId: string,
  quantity: number
) {
  const query = `
    SELECT price
    FROM \`inventory\`.\`store\`.\`products\`
    WHERE productId = $productId
  `;

  const result = await cluster.query(query, {
    parameters: { productId }
  });

  const product = result.rows[0];

  if (!product) {
    throw new Error("Product not found");
  }

  const subtotal = product.price * quantity;
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return {
    price: product.price,
    quantity,
    subtotal,
    gst,
    total
  };
}

// Function to get order summary with customer and product details

export async function getOrderSummary(cluster: any) {
  const query = `
    SELECT
      o.orderId,
      u.name AS customerName,
      p.name AS productName,
      p.price,
      o.quantity,
      (p.price * o.quantity) AS subtotal,
      ((p.price * o.quantity) * 0.18) AS gst,
      ((p.price * o.quantity) * 1.18) AS totalAmount
    FROM \`inventory\`.\`store\`.\`orders\` o
    JOIN \`inventory\`.\`store\`.\`users\` u
      ON o.userId = u.userId
    JOIN \`inventory\`.\`store\`.\`products\` p
      ON o.productId = p.productId
  `;

  const result = await cluster.query(query);
  return result.rows;
}

// Function to get top-selling products based on total quantity sold
export async function getTopSellingProducts(cluster: any) {
  const query = `
    SELECT
      p.productId,
      p.name AS productName,
      SUM(o.quantity) AS totalSold
    FROM \`inventory\`.\`store\`.\`orders\` o
    JOIN \`inventory\`.\`store\`.\`products\` p
      ON o.productId = p.productId
    GROUP BY p.productId, p.name
    ORDER BY totalSold DESC
    LIMIT 5
  `;

  const result = await cluster.query(query);

  return result.rows;
}

// Function to get monthly revenue from orders
export async function getMonthlyRevenue(cluster: any) {
  const query = `
    SELECT
      SUBSTR(o.orderDate, 0, 7) AS month,
      SUM(p.price * o.quantity) AS revenue
    FROM \`inventory\`.\`store\`.\`orders\` o
    JOIN \`inventory\`.\`store\`.\`products\` p
      ON o.productId = p.productId
    GROUP BY SUBSTR(o.orderDate, 0, 7)
    ORDER BY month
  `;

  const result = await cluster.query(query);

  return result.rows;
}

// Function to get customer purchase history with order and product details
export async function getCustomerPurchaseHistory(
  cluster: any,
  userId: string
) {
  const query = `
    SELECT
      u.userId,
      u.name AS customerName,
      o.orderId,
      o.orderDate,
      p.productId,
      p.name AS productName,
      p.price,
      o.quantity,
      (p.price * o.quantity) AS totalAmount
    FROM \`inventory\`.\`store\`.\`orders\` o
    JOIN \`inventory\`.\`store\`.\`users\` u
      ON o.userId = u.userId
    JOIN \`inventory\`.\`store\`.\`products\` p
      ON o.productId = p.productId
    WHERE u.userId = $userId
    ORDER BY o.orderDate DESC
  `;

  const result = await cluster.query(query, {
    parameters: { userId }
  });

  return result.rows;
}
