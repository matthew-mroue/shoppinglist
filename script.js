let shoppingList = [
    {name: "raspberries",
    price: 4},
    {name: "bacon",
    price: 6},
    {name: "lettuce",
    price: 3},
    {name: "milk",
    price: 2},
    {name: "ranch",
    price: 1},
    {name: "cheese",
    price: 4},
    {name: "bread",
    price: 2},
    {name: "steak",
    price: 10}
];

let total = 0;

for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i].name, shoppingList[i].price);
  total = total + shoppingList[i].price;
}

console.log("The total cost of the items on your shopping list is $" + total + ".");