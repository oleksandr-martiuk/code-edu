let customer = {
   name: "Carl",
   details: { age: 82 }
};

const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city

const customerCity2 = customer?.city || "Unknown city";
console.log(customerCity2); // Unknown city
