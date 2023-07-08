
import React from "react";
import { Product } from './Product.jsx';
import './home.css'
import { useSelector } from "react-redux";


export const Home = () => {
  const count=useSelector(state=>state.counter.value);
  // console.warn("count",count);
  
      return <div className="grid-container">
         
         
  
         {count.map((prod)=>{
          // console.log(prod);
       return (
            <Product  data={prod}/>
        )
      })}



         </div>

      
}
