interface ChaiOrder{
    name:string;
    price:number;
    isSpecial?:boolean
}
export function ChaiCard({name,price,isSpecial = false}:ChaiOrder)
{
    return(
        <article>
            <h2>
                {name}{isSpecial && <span>star</span>}
            </h2>
            <p>{price}</p>
        </article>
    )
}