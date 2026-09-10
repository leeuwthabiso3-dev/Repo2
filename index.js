
//Input
const inventory = {
    items: [
        {
            name: 'Laptop',
            price: 999.99,
            quantity: 5
        },
        {
            name: 'Mouse',
            price: 25,
            quantity: 5
        },
        {
            name: 'Keyboard',
            price: 45.50,
            quantity: 0
        },
        {
            name: 'Monitor',
            price: 150,
            quantity: 8
        }
    ]
}
console.log(inventory)

//Proccessing
function Update(){
    items[2].quantity = 20;
}
console.log(inventory)

//Output
function TotalVal(totalInventoryValue) {
  totalInventoryValue = inventory.items.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0);
}
console.log(totalInventoryValue);