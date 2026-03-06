// class Chai {
//     flavour:string;
//     price:number
//     constructor(flavour:string,price:number)
//     {
//         this.flavour = flavour;
//         this.price=price
//     }
// }//this usually refers to the current(new) object
// const masalaChai = new Chai("adrak",37)
// masalaChai.flavour="masala"//on clicking '.' we get suggestions which is why ts is used
//accessModifier
class Chai {
    flavor = "Masala";
    secretIngredients = "Cardamom"; //private variables can only be accessed within the class
    reveal() {
        return this.secretIngredients; //ok
    }
}
class Shop {
    shopName = "chai Corner";
}
class Branch extends Shop {
    getName() {
        return this.shopName; //ok protected variables are accessible inside inherited class
    }
}
//outside the class we cannot access secretIngredients directly but only through reveal method
const c = new Chai();
c.reveal(); //can now access the secretIngredients through reveal method not directly
//new Shop().The variable shopName is not accesible outside(like here)
class Walet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new Walet();
w.getBalance();
//readonly properties
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity; //this doesnt work here as readonly can be initialsed only once cannot be overwriiten
    }
}
//getter/setter(controlled gates)
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too sweet");
        this._sugar = value;
    }
}
//using getter and setter
const ch = new ModernChai();
ch.sugar = 3; //getting the sugar(get sugar) and then setting it with new value(set sugar)
class EkChai {
    flavour;
    static shopName = "DG cafe"; //accesed directly through class name no need to create objects
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName);
//abstract classes-similarly as in java
class Drink {
}
class Mychai extends Drink {
    make() {
        console.log("making chai");
    }
}
//composition(this is special to Ts) alternative to inheritance
class Heater {
    heat() {
    }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat; //we can access heat like this
    }
}
export {};
//# sourceMappingURL=oop.js.map