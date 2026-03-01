const  chai={
    name:"Masala chai",
    price:20,
    isHot:true
}
//declaring object Types
let tea:{
    name:string;
    price:number;
    isHot:boolean
}

tea = {
    name:"ginger tea",
    price:56,
    isHot:true
}

type Tea = {
    name:string;
    price:number;
    ingredients:string[]
}
 const tea2:Tea={
    name:'sharon Tea',
    price:45,
    ingredients:["teaLeaves"," condensed milk","sugar","ginger","lemon"]
 }

 type Cup = {size:string};
 let smallCup:Cup={size:"200ml"};
 let bigCup = {size:"500ml",material:"steel"}

 smallCup=bigCup

 type Brew = {brewTime:number};
 const coffee={brewTime:5,beans:"Arabica"}
const chaiBrew:Brew = coffee//acceptable

type User = {
    username:string;
    password:string
}

const u:User={
    username:"dgCodes",
    password:"123",
    
}

//separation of types
type Item = {name:string;quantity:number}
type Address = {street:string;pin:number}

type Order = {
    id:string;
    items:Item[]
    addresses:Address[]
}

//Partial<T>:=>allows you to partially update by passing any or none values as objects in parameters
type Chai = {
    name:string;
    price:number;
    isHot:boolean
}

const updateChai = (updates:Partial<Chai>)=>{
    console.log("updating chai with",updates);
}

updateChai({price:25});

updateChai({isHot:false});

updateChai({});//this sometimes creates issues in codebase
//Required<T>:=> the object passed should contain all the properties defined in the datatype object
type ChaiOrder ={
    name?:string;
    quantity?:number
}

const placeOrder = (order:Required<ChaiOrder>)=>{
    console.log(order);
}

placeOrder({name:"Masala Chai",quantity:2})//both the properties specified by the type has given required utility class used here
//Pick<T,item1,item2>:=>helps to pcick exactly what property fields are we expecting from the parameters 
type Chai2 = {
    name:string;
    price:number;
    isHot:boolean;
    ingredients:string[]
}

type BasicChaiInfo = Pick<Chai2,"name"|"price">;//used less but required to know

const chaiInfo:BasicChaiInfo = {
    name:"adrak",
    price:50,
   
}
//Omit<T,item>:=>this helps in creatin the datatype by telling what has not be picked or left out as is secretIngredients
type ChaiNew = {
    name:string;
    price:number;
    isHot:boolean;
    secretIngredients:string
}

type PublicChai = Omit<Chai,"secretIngredients">;



