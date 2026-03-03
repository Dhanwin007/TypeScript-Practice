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
class Chai{
    public flavor:string ="Masala"
    private secretIngredients = "Cardamom"//private variables can only be accessed within the class

    reveal(){
        return this.secretIngredients//ok
    }
    
}
class Shop{
    protected shopName = "chai Corner"
}
class Branch extends Shop{
    getName(){
        return this.shopName//ok protected variables are accessible inside inherited class
    }
}
//outside the class we cannot access secretIngredients directly but only through reveal method
const c=new Chai();
c.reveal();//can now access the secretIngredients through reveal method not directly

//new Shop().The variable shopName is not accesible outside(like here)

class Walet{
    #balance = 100
    getBalance(){
        return this.#balance
    }
}

const w=new Walet()
w.getBalance();
//readonly properties

class Cup{
    readonly capacity:number = 250
    constructor(capacity:number)
    {
        this.capacity = capacity;//this doesnt work here as readonly can be initialsed only once cannot be overwriiten
    }
}
//getter/setter(controlled gates)
class ModernChai{
    private _sugar = 2

    get sugar()
    {
        return this._sugar
    }
    set sugar(value:number)
    {
        if(value>5) throw new Error("Too sweet");
        this._sugar = value;
    }
}
//using getter and setter
const ch=new ModernChai();
ch.sugar=3;//getting the sugar(get sugar) and then setting it with new value(set sugar)

class EkChai{
    static shopName = "DG cafe"//accesed directly through class name no need to create objects
    constructor(public flavour:string)
    {

    }
}
console.log(EkChai.shopName);

//abstract classes-similarly as in java
abstract class Drink{
    abstract make():void
}
class Mychai extends Drink{
    make(): void {
        console.log("making chai");
    }
}
//composition(this is special to Ts) alternative to inheritance
class Heater{
    heat(){

    }
}

class ChaiMaker{
    constructor(private heater:Heater){}
    make()
    {
        this.heater.heat//we can access heat like this
    }
}

