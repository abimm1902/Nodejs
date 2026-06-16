import { connectDB } from "../app";
import * as couchbase from "couchbase";
// Function to retrieve a document from the users collection based on the provided userId
async function getUser() {
  const { usersCollection } =
    await connectDB();

  const result =
    await usersCollection.get("user101");

  console.log(result.content);

  //Exists Lookup
const res1=await usersCollection.exists("user101");
console.log("Exists Lookup Result:", res1.exists);

 //LookupIn(Sub-document Lookup)-retrive specific fields from a document
const res2 =
  await usersCollection.lookupIn(
    "user101",
    [
      couchbase.LookupInSpec.get("name"),
      couchbase.LookupInSpec.get("city")
    ]
  );
console.log(result.content.name);
console.log(result.content.city);
//get any replica of a document from the users collection based on the provided userId
const res3 = await usersCollection.getAnyReplica(
  "user101"
);
console.log("Any Replica Lookup Result:", res3.content);

//get all replicas of a document from the users collection based on the provided userId
const res4 = await usersCollection.getAllReplicas(
  "user101"
);
console.log("All Replicas Lookup Result:", res4);

}

getUser();






