type ChaiOrder={
    type:string;
    sugar:number;
    strong:boolean;
}
function makeChai(order:ChaiOrder)
{
    console.log(order);
}

function serveChai(order:ChaiOrder)
{
    console.log(order);
}
/*this might be very usefull when we are migrating code in JS to TS */

type TeaRecipe={
    water:number;
    milk:number
}

// interface TeaRecipe{
//     water:number;
//     milk:number
// }
//for this also the below function works properly only problem when interface or types are not objects but hardcoded strings
class MasalaChai implements TeaRecipe{
    water=100;
    milk=50;
}//this works fine

// type CupSize = "small" | "large"

// class Chai implements CupSize{

// }//this is not allowed in TS u can implement object type custom datatype but not like this types

interface CupSize {
    size:"small" | "large"
}

class Chai implements CupSize{
    size:"small"|"large" = "large";
}
//when using classes and implements prefer to use interfaces itself not the type
type TeaType = "masala"| "ginger" | "lemon"//this is union; these types are called literal types

function orderChai(t:TeaType)
{
    console.log(t);
}

type BaseChai ={teaLeaves:number}
type Extra = {masala:number}

type Masala = BaseChai & Extra//this is Intersection


const cup:Masala =  {
    teaLeaves:2,
    masala:1
}

type User = {
    username:string;
    bio?:string
}

const u1:User={username:"Dhanwin"}
const u2:User={username:"Dhanwin", bio:"works at IBM"}

type Config = {
    readonly appName:string,
    version:number
}
const cfg:Config = {
    appName:"MasterJi",//for it be readonly it is neccessary to set its value atleast once
    version:1
}
//cfg.appName="chaiCode"//here the error reads cannot assign again as property appName is readonly once defined done

