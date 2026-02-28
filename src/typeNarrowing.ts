function getChai(kind:string|number)
{
    if(typeof kind === 'string')
    {
        return `Making ${kind} chai...`
    }
    return `Chai order:${kind}`;
}

function serveChai(msg?:string){
    if(msg)
    {
        return `Serving ${msg}`
    }
    return `Serving default masala chai`;
}

function orderChai(size:"small"| "medium" | "large" | number){
    if(size==="small")
    {
        return `small cutting chai...`
    }
    if(size === 'medium' || size === 'large')
    {
        return `make extra chai`
    }
    return `chai order #${size}`
}

class kulhadChai{
    serve()
    {
        return `Serving kulhad Chai`
    }
}
 
class cutting{
    serve()
    {
        return `Serving cutting chai`
    }
}

function serve(chai:kulhadChai | cutting)
{
    if(chai instanceof kulhadChai)
    {
        return chai.serve()
    }
    else{
        chai.serve()
    }
}

type ChaiOrder={
    type: string,
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj==="object" &&
        obj !==null && 
        typeof obj.type === "string" &&
        typeof obj.sugar==="number"
    )
}

function serveOrder(item:ChaiOrder | string)
{
    if(isChaiOrder(item))
{
    return `Serving ${item.type} chai with ${item.sugar}`
}
return `serving custom chai: ${item}`
}

type MasalaChai = {type:"masala",spicelevel:number};//type here is a must and should keyword
type GingerChai = {type:"ginger",amount:number};
type ElaichiChai = {type:"elacichi",aroma:number};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order:Chai)
{
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        case "ginger":
            return `Ginger chai`
            break;
        case "elacichi":
            return `elacichi Tea`        
    
        default:
            return `Masala Chai`
            break;
    }
}

function brew(order:MasalaChai | GingerChai)
{
    if("spicelevel" in order)
    {
        //then we can be sure that it is masala chai as only that type object has spice level as key
    }
}
// function isStringArray(arr:unknown):arr is string[]{//in case of unknown we need to tell the datatype while defining,constructing,calling,etc
// return
// }
