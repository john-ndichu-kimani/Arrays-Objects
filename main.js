
// Test: Give me the sum of the prices (try chaining methods) [{price: 10.99}, {price: 5.99}, {price: 29.99}]​

//declare variable to hold the array of item objects 
const items = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

const totalPrice = items
  .map((item) => {
   //map function to iterate the array and accessing the price values in item object
    return item.price;
  })
  .reduce((acc, curr) => {
   //reduce function , applies a function to each element of an array, resulting in a single output value.
    return acc + curr;
  });

console.log(totalPrice);
