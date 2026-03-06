
import './App.css'
import { ChaiCard } from './components/ChaiCard'
import {Counter} from './components/Counter'
import {ChaiList} from './components/ChiaList'
import type {Chai} from "./Types/types"
 const menu:Chai[] = [{id:1,name:"Masala",price:12},{id:2,name:"Cinamon",price:39},{id:3,name:"greenTea",price:25}]
function App() {
  

  return (
    <>
    <div>
  <h1>Vite + React</h1>
  <ChaiList items={menu}/>
  <Counter />
  </div>
    </>
  )
}

export default App
