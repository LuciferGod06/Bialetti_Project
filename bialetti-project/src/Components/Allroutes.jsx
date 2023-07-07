import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { ProductDetail } from './ProductDetail/ProductDetail'
import {Product} from './Product/Product'


export const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Product/>} />
      <Route path='/product/:id' element={<ProductDetail/>} />
    </Routes>
  )
}
 