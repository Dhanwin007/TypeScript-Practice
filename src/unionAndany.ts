let subs:number | string = "1M"
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

apiRequestStatus="success"// none can add anything like done or waiting it has to be defined as type

let airlineSeat:'aisle' | 'window' | 'middle'= 'middle';

airlineSeat='aisle';

const orders = ['12','20','28','42']
let currentOrder:string|undefined;//here it doesnt care about dataType it is neiher initialed nor annoted it has any as datatype

for(let order of orders)
{
    if(order === '28')
    {
        currentOrder = order;
        break;
    }
}
currentOrder='45';//nothing is stopping me from adding number here while it should only take string(by convention)

console.log(currentOrder);