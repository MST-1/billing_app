import React from 'react'
import './invoice.css'
import {useSelector } from 'react-redux';
import { InvoiceCard } from './InvoiceCard.jsx';
import { useAuth0 } from '@auth0/auth0-react';


export const Invoice = () => {
  const {user}=useAuth0();
  
  

  const data=useSelector(state=>state.carter.value);

  const sum=()=>{

    let val=0;
    data.map((e)=>{

    val=val+(e.price*e.qty);

    })
    // console.log(val);
    return val;


    

  }
  //  console.log(data);

  function item_cards(){

   return data.map((e)=>{

    return <InvoiceCard item={e}/>
   })

  }






  return (
    <div className='invoice-container'>

      <div className='inv-card'>
       
      
      <section>
  <div class="invoice">
    <div class="invoice_info">
      <div class="i_row">
        <div class="i_logo">
          <h1>CODING MARKET</h1>
        </div>
        <div class="title">
          <h1>INVOICE</h1>
        </div>
      </div>
      <div class="i_row">

        <div class="i_to">
          <div class="main_title">
            <p>Invoice To</p>
          </div>
          <div class="p_title">
            <p>{user.name}</p>
            <span>Team Lead</span>
          </div>
          <div class="p_title">
            <p>Noida Sector-75</p>
            <p>Noida, Uttar Pradesh</p>
          </div>
        </div>
        <div class="i_details text_right">
          <div class="main_title">
            <p>Invoice details</p>
          </div>
          <div class="p_title">
            <p>Invoice No:</p>
            <span>3452356</span>
          </div>
          <div class="p_title">
            <p>Invoice Date:</p>
            <span>22 April 2023</span>
          </div>
        </div>
      </div>
    </div>
    <div class="invoice_table">
      <div class="i_table">
        <div class="i_table_head">
          <div class="i_row">
            <div class="i_col w_55">
              <p class="p_title">DESCRIPTION</p>
            </div>
            <div class="i_col w_15 text_center">
              <p class="p_title">QTY</p>
            </div>
            <div class="i_col w_15 text_center">
              <p class="p_title">PRICE</p>
            </div>
            <div class="i_col w_15 text_right">
              <p class="p_title">TOTAL</p>
            </div>
          </div>
        </div>
        <div class="i_table_body">
          
        {/* Item start */}



          {/* <div class="i_row">
            <div class="i_col w_55">
              <p>Lorem, ipsum.</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, vel.</span>
            </div>
            <div class="i_col w_15 text_center">
              <p>13</p>
            </div>
            <div class="i_col w_15 text_center">
              <p>$10.00</p>
            </div>
            <div class="i_col w_15 text_right">
              <p>$130.00</p>
            </div>
          </div> */}
            {item_cards()}
               
           {/* Item end */}
        </div>
        <div class="i_table_foot">
          <div class="i_row">
            <div class="i_col w_50">
              <p>Sub Total</p>
              <p>Due Total</p>
              <p>Tax 18%</p>
            </div>
            <div class="i_col w_50 text_right">
              <p>$ {sum()}</p>
              <p>$150.00</p>
              <p>${sum()*0.18}</p>
            </div>
          </div>
          <div class="i_row grand_total_wrap">
            <div class="i_col w_50">
              <p>GRAND TOTAL:</p>
            </div>
            <div class="i_col w_50 text_right">
              <p>${sum()+(sum()*0.18)-150}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="invoice_payment">
      <div class="i_row">
        <div class="i_payment">
          <div class="main_title">
            <p>Payment Method</p>
          </div>
          <div class="p_title">
            <p>Paypal:</p>
            <span>paypal@yourcompany.com</span>
          </div>
          <div class="p_title">
            <p>Card Payment:</p>
            <span>Visa, MasterCard, Paypal</span>
          </div>
        </div>
        <div class="i_duetotal text_right">
          <div class="main_title">
            <p>Total Due</p>
          </div>
          <div class="p_title">
            <p>Amout In USD:</p>
            <span>$150.00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="invoice_terms">
      <div class="main_title">
        <p>terms and Conditions</p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nemo eligendi inventore? Provident iste cumque quam eaque consequatur architecto, consequuntur molestiae? Corporis, voluptates? Fugit, omnis.</p>
    </div>
  </div>
</section>
      
      
      
      
      
      
      
      </div>
      
    </div>
  )
}
