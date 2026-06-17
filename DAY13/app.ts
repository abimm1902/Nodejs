import * as couchbase from "couchbase";

async function insertCustomers() {
  const cluster = await couchbase.connect(
    "couchbases://couchbase.com",
    {
      username: "****",
      password: "******"
    }
  );

  console.log("Connected to Couchbase Cluster Successfully");

  const bucket = cluster.bucket("inventory");

  

  const collection = bucket
    .scope("store")
    .collection("customers");

  const totalRecords = 5000;
  const batchSize = 100;

  for (
    let start = 1;
    start <= totalRecords;
    start += batchSize
  ) {
    const promises = [];

    for (
      let i = start;
      i < start + batchSize && i <= totalRecords;
      i++
    ) {
      promises.push(
        collection.upsert(`customer_${i}`, {
          id: i,
          name: `Customer${i}`,
          date: new Date().toISOString(),
          amount: Math.floor(Math.random() * 10000) + 1
        })
      );
    }

    await Promise.all(promises);

    console.log(
      `Inserted records ${start} to ${
        Math.min(start + batchSize - 1, totalRecords)
      }`
    );
  }

  console.log("✅ 5000 Customers Inserted Successfully");

  await cluster.close();
}

insertCustomers().catch(console.error);
