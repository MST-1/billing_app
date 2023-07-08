import React from 'react';
import "../Home/product.css";
import { Link } from 'react-router-dom';
import {addtoCART} from '../../features/counter/cart';
import { add } from '../../features/counter/forId';
import { ADD_TO_CART } from '../../features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';



export const Product = (props) => {
    const{id,productName,price,productImage,description,qty}=props.data;

  
    const cartData=useSelector(state=>state.counter.value);
       const dispatch=useDispatch();
  //*******************(s) */ function for deleteing element*********************
       const delme=(id)=>{
        
        let removedata=cartData.filter(function(value){ 

         return (value.id!== id);
        });


        //  console.log(removedata);

        dispatch(ADD_TO_CART(removedata));

       }
        //*******************(e) */ function for deleteing element*********************




         //*******************(s) */ function for editing element*********************
       const editMe=(id)=>{


        //  console.log(removedata);

        dispatch(add(id));

       }
        //*******************(e) */ function for editing element*********************

  return (
    
    <div className="grid-item" key={id}> 
    {/* start */}

    <div className="card" >
  <img src={productImage}className="card-img-top" alt={productName}/>

<div className="card-body">
    <h5 className="card-title">{productName}</h5>
    <p className="card-text">$ : {price}/-</p>
  

    <button className='addToCartBttn' onClick={()=>{dispatch(addtoCART({id,productName,price,productImage,description,qty}))}}>Add To Cart</button>


  </div>

</div>
    {/* end */}


       
    </div>
  )
}