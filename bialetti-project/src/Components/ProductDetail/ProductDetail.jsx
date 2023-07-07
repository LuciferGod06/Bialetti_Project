import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {useSelector} from 'react-redux'
import { AiOutlineHeart } from "react-icons/ai";
import './ProductDetail.css'
import image from './fivestar.PNG'

export const ProductDetail = () => {

  const [singledata, setsingledata] = useState({})

const {id} =  useParams();

useEffect(()=>{
  axios.get(`http://localhost:8080/products?id=${id}`)
  .then((resp)=>{setsingledata(resp.data[0])});
},[])

console.log(singledata);
  return (

    <div style={{ padding: "10px 20px 10px 20px " }} >
      <p style={{textAlign:"left"}} >Shop <ChevronRightIcon/> {singledata.type} <ChevronRightIcon/> {singledata.title} </p>
      <div className='ProductDetail_Top_Div' >
        <div>Table</div>
        <div> <img width={"500px"} src={singledata.image} alt={singledata.title} /> </div>
        <div>
          <div className='ProductDetail_Title_Div' >
            <h2>{singledata.title}</h2>
            <AiOutlineHeart/>
          </div>
          <div className='ProductDetail_Price_Review' >
            <h3>{singledata.price}$</h3>
            <div>
            <img src={image} alt="" />
            <p>({Math.floor(Math.random() * 40 + 10)} reviews)</p>
            </div>
            
          </div>
          <div>
            <table className='ProductDetail_Table' >
              <tr>
              <td>DIMENSIONS</td>
              <td>{Math.floor(Math.random() * 200 + 10)}x13x{Math.floor(Math.random() * 10 + 10)}cm</td>
              </tr>
              <tr>
              <td>MATERIAL</td>
              <td>Aluminium , Stainless Steel </td>
              </tr>
              <tr>
              <td>Type</td>
              <td>{singledata.type}</td>
              </tr>
            </table>
          </div>
          <div className='ProductDetail_Cart_Div'>
            <div >
              <button>-</button>
              <p>{1}</p>
              <button>+</button>
            </div>
            <div>
            <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      
       </div>

  )
}
