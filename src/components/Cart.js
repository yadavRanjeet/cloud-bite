import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className='text-center m-4 p-4 '>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'></div>
      {/*       */}
    </div>
  )
}

export default Cart