import React from 'react'
import './pagination.css'
import {Button} from '@chakra-ui/react'
import {FcNext,FcPrevious} from 'react-icons/fc'



const Pagination = ({ currentPage, onPageChange }) => {
  


  return (
   <div className='Pagination_Main_Div' >
      <div className='Pagination_Div' >
      <button  disabled={currentPage === 1} onClick={()=>onPageChange(-1)} ><FcPrevious/></button>
      <p>{currentPage}</p>
      <button onClick={()=>onPageChange(1)} > <FcNext/> </button>
        </div>    
    
        
  
   </div>
  );
};

export  {Pagination};
