function wrapInArray<T>(item:T):T[]
{
    return [item];
}
wrapInArray("masala");
wrapInArray(42);
wrapInArray({flavor:"Ginger"});
// This function is type-safe.
// Generics allow any type to be passed,
// but each function call preserves that specific type (T),
// ensuring the returned array contains only that type.

function pair<A,B>(a:A , b:B):[A,B]
{
    return [a,b];
}//helps in building library frameworks
pair("masala",20);
pair("masala",{flavor:"ginger"});
 //Generic Intrface
 interface Box<T>{
    content: T
 }

 const numberBox:Box<number>={content:10}
 const stringBox:Box<string>={content:"10"}
 //partial pick omit works with generics also

 interface ApiPromise<T>{
    status:number,
    data:T
 }
 const res:ApiPromise<{flavor:string}> = {
    status:2,
    data:{
        flavor:"vanilla"
    }
 }
 //the above one is important example
 