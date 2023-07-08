import React from 'react'

export const InvoiceCard = (item) => {
    console.log(item);
  return (
    
    <div class="i_row">
    <div class="i_col w_55">
      <p>{item.item.productName}</p>
      <span>{item.item.description}</span>
    </div>
    <div class="i_col w_15 text_center">
      <p>{item.item.qty}</p>
    </div>
    <div class="i_col w_15 text_center">
      <p>$ {item.item.price}</p>
    </div>
    <div class="i_col w_15 text_right">
      <p>$ {item.item.qty*item.item.price}</p>
    </div>
  </div>
  )
}
