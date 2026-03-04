interface chai {
    flavor:string;
    price:number;
    milk?:boolean
}
//this does not generate any extra code after converting to JS
const masala:chai={
    flavor:"masala",
    price:30,
    milk:true
}

interface Shop {
    readonly id:number;
    name:string
}

const s:Shop = {id:1,name:"code with DG"};
s.name="code with me";
//s.id=1 this is not allowed as it is declared as readonly

interface DiscountCalculator{
    calculate(price:number):number
}
class cal implements DiscountCalculator{
    calculate(price: number): number {
        return price-10;
    }
}
new cal().calculate(5);

//interface or blueprint for functions(to be noted)
interface Discount{
    (price:number):number
}

const apply50:Discount=(p)=> p*0.5;
//

interface TeaMachine{
    start():void;
    stop():void
}//this defines the structure
//if anything follows this datatype/structure then such thing has to describe the implementation of thoose methods defined in the interface
const machine:TeaMachine = {
    start() {
        console.log("start");
    },
    stop(){
        console.log('stop it');
    }

}
//

//index signature
//avoid this as possible
interface ChaiRatings{
    [flavor:string]:number
}//we are making a collection of ratings it should have a flavor and a number(rating) which is the signature

const ratings:ChaiRatings={
    "masala":4.5,
    "ginger":4.5,
    "adrak":5.0
}

/*interfaces actually merge in the sense that multiple interfaces(with same name) with different properties can be defined but the object/variable
that implements it has to include all the properties of all the interface this provides flexibilty to include any field later*/

interface User{
    name:string
}
interface User{
    age:number
}
const u:User={
    name:"Dhanwin",
    age:21
}

//extending interfaces
//this is most common alternative of the above

interface A{a:string};
interface B{b:string};

interface C extends A,B{}

