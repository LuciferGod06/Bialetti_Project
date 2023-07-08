import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import './ProductDetail.css'
import image from './fivestar.PNG'
import blackstar from './blackstar.jpg'
import { UnorderedList, ListItem } from '@chakra-ui/react'
import { MdOutlineRateReview } from 'react-icons/md'

export const ProductDetail = () => {

  const [singledata, setsingledata] = useState({})
  const [disc, setdisc] = useState(false);
  const [tech, settech] = useState(false);
  const [ship, setship] = useState(false);
  const [qty, setqty] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/products?id=${id}`)
      .then((resp) => { setsingledata(resp.data[0]) });
  }, [])


const handleCartData =()=>{
      axios.post(`http://localhost:8080/CartProduct`,{
        title:singledata.title,
        price:singledata.price,
        quantity:qty,
        image:singledata.image
      }).then((resp)=>{console.log(resp.data)})
      .catch((error)=>{console.log(error)})
}
  return (

    <div style={{ padding: "10px 20px 10px 20px " }} >
      <p style={{ textAlign: "left", marginBottom: "4%" }} >shop <ChevronRightIcon /> {singledata.type} <ChevronRightIcon /> {singledata.title} </p>
      <div className='ProductDetail_Top_Div' >
        <div >
          <div className='ProductDetail_Descp_Div' >
            <div onClick={() => { setdisc(!disc) }} style={disc ? { borderBottom: "none" } : { borderBottom: "1px solid rgba(222, 250, 250, 0.733)" }} >
              <h1 >DESCRIPTION</h1>
              {disc ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <div className={disc ? "content show" : "content"} >
              <p >{singledata.description}</p>
            </div>

          </div>
          <div className='ProductDetail_Technical_Div'  >
            <div onClick={() => { settech(!tech) }} style={tech ? { borderBottom: "none" } : { borderBottom: "1px solid rgba(222, 250, 250, 0.733)" }}>
              <h1 >TECHNICAL FEATURES</h1>
              {tech ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>

            <div className={tech ? "content show" : "content"} >

              <tr>
                <td>Body material</td>
                <td>Aluminum-steel</td>

              </tr>
              <tr>
                <td>Handle material</td>
                <td>Slicone</td>
              </tr>
              <tr>
                <td>Knob material</td>
                <td>Thermoplastic</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td> 123 x 40 x 30 cm</td>
              </tr>
              <tr>
                <td>Dishwasher</td>
                <td>No</td>
              </tr>
            </div>

          </div>
          <div className='ProductDetail_Ship_Div' >
            <div onClick={() => { setship(!ship) }} style={ship ? { borderBottom: "none" } : { borderBottom: "1px solid rgba(222, 250, 250, 0.733)" }} >
              <h1 >SHIPPING & RETURN</h1>
              {ship ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <div className={ship ? "content show" : "content"} >
              <UnorderedList style={{ textAlign: "left", paddingLeft: "2px" }} >
                <ListItem>Free Shipping above $ 25 </ListItem>
                <ListItem>10 Day Replacement / Return</ListItem>
                <ListItem>12 Months Warranty</ListItem>
              </UnorderedList>
            </div>

          </div>
        </div>
        <div> <img width={"100%"} src={singledata.image} alt={singledata.title} /> </div>
        <div >
          <div className='ProductDetail_Title_Div' >
            <h2>{singledata.title}</h2>
            <AiOutlineHeart />
          </div>
          <div className='ProductDetail_Price_Review' >
            <h3 >{singledata.price}$</h3>
            <div>
              <img src={image} alt="" />
              <p>(31 reviews)</p>
            </div>
          </div>
          <div className='ProductDetail_Table' >

            <tr>
              <td>DIMENSIONS</td>
              <td>123 x 40 x 30 cm</td>
            </tr>
            <tr>
              <td>MATERIAL</td>
              <td>Aluminium , Stainless Steel </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{singledata.type}</td>
            </tr>
          </div>

          <div className='ProductDetail_Cart_Div'>
            <div >
              <button onClick={()=>{setqty(qty-1)}} disabled={qty === 1}  >-</button>
              <p>{qty}</p>
              <button onClick={()=>{setqty(qty+1)}} >+</button>
            </div>
            <div onClick={handleCartData} >
              ADD TO CART
            </div>
          </div>
        </div>
      </div>
      <div className='ProductDetail_Review_Section_Div'>
        <div>
          <h1>CUSTOMER REVIEWS</h1>
          <div className='ProductDetail_ReviewImage' >
            <img width={"85px"} src={blackstar} alt="blackstar" />
            <h1> 4.99 <span style={{ fontSize: "13px" }} >/16 reviews</span>  </h1>

          </div>
          <button className='Review_Div' >
            <MdOutlineRateReview /> &nbsp; WRITE A REVIEW
          </button>
          <br />
          <button className='Question_Div' >
            <MdOutlineRateReview /> &nbsp; ASK A QUESTION
          </button>
        </div>
        <div  >
          <h3 style={{ fontWeight: "600", paddingBottom: "6px", borderBottom: "1px solid rgba(222, 250, 250, 0.733)" }} >REVIEWS</h3>
          <div className='ProductDetail_Para' >
            <div>
              <img src={blackstar} alt="blackstart" />
              <p>Caral S. </p>
            </div>



            <h4>WELL DESNGED FOR THE INDUCTION STOVE</h4>
            <p>The flavors of home are sacred for us Italians,
              and I can say that no Italian kitchen is complete without a Moka.
              Good food, taking time to share moments with others,
              cooking as a gesture of love ... this is what it means to be Italian ...
              And the Moka is precisely that: a little thing that reminds
              us how wonderful it is to simply enjoy life.</p>
          </div>
          <div className='ProductDetail_Para' >
            <div>
              <img src={blackstar} alt="blackstart" />
              <p>Jenifer  Lopeez. </p>
            </div>
            <h4>LOVE THIS !</h4>
            <p>Cleaning the Bialetti coffee maker is a breeze. The components can be easily disassembled and rinsed with warm water. I avoid using detergent to prevent any residue from affecting the taste of future brews.</p>
          </div>
          <div className='ProductDetail_Para' >
            <div>
              <img src={blackstar} alt="blackstart" />
              <p>Gray S. </p>
            </div>
            <h4>FANTASTIC COFFEE BREWER</h4>
            <p>The Moka is a true icon of Italy. It is part of our history, of our identity.
              Personally, I have been using Moka every morning for more than 50 years.</p>
          </div>
        </div>

      </div>
    </div>

  )
}
