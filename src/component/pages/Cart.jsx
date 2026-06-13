import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, decreaseQuantity } from "../../store/cartSlice";


const Cart =()=>{
  const cartItems=useSelector((state)=>state.cart.items);
  const dispatch=useDispatch();
  const total=cartItems.reduce((sum, item)=> sum + item.price, 0);

  const handleRemove=(id)=>{
    dispatch(removeFromCart(id))
  }

  
  return (
    <div>
      <h1>Your Cart</h1>
      {
        cartItems.length ==0 ? (<h1>Cart is empty</h1>) :
        (
          cartItems.map((item)=>(
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div>
                <button onClick={()=> dispatch(decreaseQuantity(item.id))}>➖</button>
                <span>{item.quantity}</span>
                <button onClick={()=> dispatch(addToCart(item))}>➕</button>
              </div>
              <button onClick={()=> handleRemove(item.id)}>Remove</button>
            </div>
          ))
        )
      }
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Cart;