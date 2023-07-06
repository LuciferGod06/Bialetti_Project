import React, { useEffect, useState } from 'react'
import './Product.css'
import { ChevronDownIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { handleLoading, handleProductData } from '../../Redux/action'

import { Center, Select, Spinner } from '@chakra-ui/react'

export const Product = () => {
  const [sorting, setsorting] = useState('');
  const [btn, setbtn] = useState('');


  useEffect(() => {
    let url = `http://localhost:8080/products`;
    if(sorting && btn){
      url += `?type=${btn}&_sort=price&_order=${sorting}`
    }

   else if(sorting){
      url += `?_sort=price&_order=${sorting}`
    }
    else if (btn) {
      url += `?type=${btn}`
    }
    fetching(url)

  }, [btn,sorting]);

  const dispatch = useDispatch();
  const { ProductData,loading } = useSelector((store) => {
    return store;
  })

  const fetching = (url) => {
    dispatch(handleLoading());
    axios.get(url)
    .then((resp)=>{console.log(resp.data)})
    


  }
  const handlebtn = (value) => {
    switch (value) {
      case "all": return setbtn('');
      case "coffee": return setbtn('coffee');
      case "coffee Maker": return setbtn('coffee Maker');
      case "Espresso Machines": return setbtn('Espresso Machines');
      case "accessories": return setbtn('accessories');

    }
  }

  return (
    <div style={{ padding: "10px 20px 10px 20px " }} >

      <div className='Product_Top_Button_Div' >
        <button value="all" onClick={(e) => { handlebtn(e.target.value) }}  >ALL</button>
        <button value="coffee" onClick={(e) => { handlebtn(e.target.value) }} >COFFEE</button>
        <button value="coffee Maker" onClick={(e) => { handlebtn(e.target.value) }} >COFFEE MAKER</button>
        <button value="Espresso Machines" onClick={(e) => { handlebtn(e.target.value) }} >ESPRESSO MACHINE</button>
        <button value="accessories" onClick={(e) => { handlebtn(e.target.value) }} >ACCESSORIES</button>
      </div>
      <div className='Product_Filter_Div' >
      <select > 
        <option value="">FILTER</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <select onChange={(e)=>{setsorting(e.target.value)}} > 
        <option value="" >SORTING</option>
        <option value="asc" >PRICE(LOWEST FIRST) </option>
        <option value="desc">PRICE(HIGHEST FIRST)</option>
      </select>
      </div>
      <div className='Product_Heading_Div' >
        <h1>COFFEE</h1>
        <div className='Product_Heading_InnerDiv' >
          <p>A PERFECT COMBINATION OF FLAVORS AND AROMAS</p>
          <p>Total 1-{ProductData.length} OF {ProductData.length}</p>
        </div>
      </div>
      {
          loading ? <Center><Spinner padding={"10px"} speed={'0.65s'} size={'xl'} /></Center>  : <div className='Product_Items_Div'>{
            ProductData?.map((ele, ind) => {
                return <div className='Product_Item' key={ind} >
                  <div><img src={ele.image} alt={ele.title} /></div>
      
                  <div >
                    <h4>{ele.title}</h4>
                    <h4>{ele.price}$</h4>
                  </div>
      
                </div>
              })
            }
            </div>
      }
     
    </div>
  )
}
