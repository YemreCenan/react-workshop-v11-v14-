import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Dropdown, DropdownDivider, Label } from 'semantic-ui-react' 
export default function CardSamuray() {

const {cartItems} = useSelector(state=>state.cart)
  return (

         <div> <Dropdown item text="CartDetail">
    <Dropdown.Menu>
{
  cartItems.map((cartItems)=>(
    <Dropdown.Item key={cartItems.product.id}>
      {cartItems.product.productName}
      <Label>
        {cartItems.quantity}
      </Label>
    </Dropdown.Item>

  ))
}

    
      <DropdownDivider/>
      <Dropdown.Item as={NavLink} to="/cart">Go to Card</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown></div>
 
  )
}
