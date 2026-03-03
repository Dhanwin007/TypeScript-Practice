//declaring arrays with their datatypes
const chaiFlavours:string[]=["masasala","Adrak"];
const chaiPrice:number[]=[10,40]

const rating:Array<number>=[4,5,30];//the data type written within the diamond can also be custom designed data type

//array of objects
type Chai = {
    name:string;
    price:number
}

const menu:Chai[]=[{name:"mint tea",price:20},
    {name:"lemon tea",price:30},
    {name:"masala tea",price:29}]
 menu.push({name:"tea Icecream",price:79}) ;//here it is allowed as it is "not" readonly  

//ReadOnly Arrays are the special arrays which can be defined once but cannot be changed again

const cities:readonly string[]=["Bengaluru","Delhi"]
//cities.push//this is not allowed as the array is readonly it can't be manipulated

//for 2d arrays
const table:number[][]=[[1,2,3],[1,3,5],[2,4,7]];

//tuples special for TS
let chaiTuple:[string,string,number[]];
chaiTuple=["masala","read",[30,50,69]];

//chaiTuple=[30,"hh"] not allowed 

let userInfo:[string,number,boolean?];
userInfo=["dg",200,true]//adding the last boolean is optional
//readonly tuple
const location:readonly [number,number]=[28.66,32.22];

//named tuple
//this gets the most preference
const chaiItems:[name:string,price:number]=["Masala",25];

//enums(to restrict the options for users)
enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status{
    PENDING=100,
    SERVED,//automatically becomes 101
    CANCELLED//automatically becomes 102
}

enum ChaiType{
    MASALA="masala",
    GINGER="ginger"
}
function makeChai(type:ChaiType)
{
    console.log(`Making:${type}`);
}
makeChai(ChaiType.MASALA);//This is the most standard practice dont directly say "masala"

enum RandomEnum{
    ID=1,
    NAME="chai"//this type of enums are not preffered
}//enums are preffered to be having values of same datatypes as a good prectice

const enum Sugars {
    LOW=1,
    MEDIUM=2,
    HIGH=3
}
const s=Sugars.HIGH;

let t:[string,number]=["chai",10]
t.push("extra")//this is always possible but not a good practice




