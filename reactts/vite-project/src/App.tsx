
import './App.css'
//import { ChaiCard } from './components/ChaiCard'
import {Counter} from './components/Counter'
import {ChaiList} from './components/ChiaList'
import type {Chai} from "./Types/types"
import { OrderForm } from './components/OrderForm'
import Card from './components/Card'
 const menu:Chai[] = [{id:1,name:"Masala",price:12},{id:2,name:"Cinamon",price:39},{id:3,name:"greenTea",price:25}]
function App() {
  

  return (
    <>
    <div>
  <h1>Vite + React</h1>
  <ChaiList items={menu}/>
  <Counter />
  </div>
  <div>
    <OrderForm 
    onSubmit={(order)=>{
      console.log("placed",order.name,order.cups)
    }}/>
  </div>
  <div>
    <Card title="masala Chai" 
    footer={<button>Order Now</button>} />
  </div>
    </>
  )
}

export default App
