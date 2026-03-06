//declaring arrays with their datatypes
const chaiFlavours = ["masasala", "Adrak"];
const chaiPrice = [10, 40];
const rating = [4, 5, 30]; //the data type written within the diamond can also be custom designed data type
const menu = [{ name: "mint tea", price: 20 },
    { name: "lemon tea", price: 30 },
    { name: "masala tea", price: 29 }];
menu.push({ name: "tea Icecream", price: 79 }); //here it is allowed as it is "not" readonly  
//ReadOnly Arrays are the special arrays which can be defined once but cannot be changed again
const cities = ["Bengaluru", "Delhi"];
//cities.push//this is not allowed as the array is readonly it can't be manipulated
//for 2d arrays
const table = [[1, 2, 3], [1, 3, 5], [2, 4, 7]];
//tuples special for TS
let chaiTuple;
chaiTuple = ["masala", "read", [30, 50, 69]];
//chaiTuple=[30,"hh"] not allowed 
let userInfo;
userInfo = ["dg", 200, true]; //adding the last boolean is optional
//readonly tuple
const location = [28.66, 32.22];
//named tuple
//this gets the most preference
const chaiItems = ["Masala", 25];
//enums(to restrict the options for users)
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; //automatically becomes 102
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making:${type}`);
}
makeChai(ChaiType.MASALA); //This is the most standard practice dont directly say "masala"
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "chai"; //this type of enums are not preffered
})(RandomEnum || (RandomEnum = {})); //enums are preffered to be having values of same datatypes as a good prectice
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
const s = Sugars.HIGH;
let t = ["chai", 10];
t.push("extra"); //this is always possible but not a good practice
export {};
//# sourceMappingURL=ArrayEnum.js.map