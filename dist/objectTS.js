const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
};
//declaring object Types
let tea;
tea = {
    name: "ginger tea",
    price: 56,
    isHot: true
};
const tea2 = {
    name: 'sharon Tea',
    price: 45,
    ingredients: ["teaLeaves", " condensed milk", "sugar", "ginger", "lemon"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee; //acceptable
const u = {
    username: "dgCodes",
    password: "123",
};
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({}); //this sometimes creates issues in codebase
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({ name: "Masala Chai", quantity: 2 }); //both the properties specified by the type has given required utility class used here
const chaiInfo = {
    name: "adrak",
    price: 50,
};
export {};
//# sourceMappingURL=objectTS.js.map