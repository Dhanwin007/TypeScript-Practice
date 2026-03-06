function makeChai(order) {
    console.log(order);
}
function serveChai(order) {
    console.log(order);
}
// interface TeaRecipe{
//     water:number;
//     milk:number
// }
//for this also the below function works properly only problem when interface or types are not objects but hardcoded strings
class MasalaChai {
    water = 100;
    milk = 50;
} //this works fine
class Chai {
    size = "large";
}
function orderChai(t) {
    console.log(t);
}
const cup = {
    teaLeaves: 2,
    masala: 1
};
const u1 = { username: "Dhanwin" };
const u2 = { username: "Dhanwin", bio: "works at IBM" };
const cfg = {
    appName: "MasterJi", //for it be readonly it is neccessary to set its value atleast once
    version: 1
};
export {};
//cfg.appName="chaiCode"//here the error reads cannot assign again as property appName is readonly once defined done
//# sourceMappingURL=interfaceTS.js.map