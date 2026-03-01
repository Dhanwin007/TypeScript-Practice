//datatypes of arguments
function makeChai(type:string,cups:number)
{
    console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Masala",2);
//return datatype
function getChaiPrice():number{
    return 25
}

function makeOrder(order:string)
{
    if(!order) return null;
    return order;
}

//logger functions:just printing
function logChai():void{
    console.log("chai is ready");
}
//optional parameter
// function orderChai(type?:string)
// {

// }
//default parameters(optional)
//these optional and default parameters are written at the end of parameter list by practice
function orderChai(type:string="Masala")
{

}
//return type need not be necessarily written TS automatically infers it but for security it is a good practice to write it


function createChai(order:{
    type:string;
    sugar:number;
    size:"small"|"large"
}):number{
    return 4;
}//this is very easy nothing to be scared of it just look through it carefully

