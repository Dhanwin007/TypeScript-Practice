import React from 'react'
import type {Chai} from '../Types/types'
import { ChaiCard } from './ChaiCard'
interface ChaiListProps{
    items:Chai[]
}

export function ChaiList({items}:ChaiListProps) {
  return (
    <div>ChaiList:{items.map((chai)=>(
        <ChaiCard 
        key={chai.id}
        name={chai.name}
        price={chai.price}
        isSpecial={chai.price>30}
        />//always remember that key should be given to the component rendered on iteration
    ))}</div>
  )
}

export default ChaiList