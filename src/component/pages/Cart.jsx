import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, decreaseQuantity } from "../../store/cartSlice";


const Cart =()=>{
  const cartItems=useSelector((state)=>state.cart.items);
  const dispatch=useDispatch();
  const total=cartItems.reduce((sum, item)=> sum + (item.price * item.quantity), 0);

  
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-center text-3xl font-bold mb-6">Your Cart</h1>
      {
        cartItems.length ==0 ? (<h1 className="text-gray-500 text-lg">Cart is empty</h1>) :
        (
          <div className="space-y-4">
            {cartItems.map((item)=>(
              <div key={item.id} className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={()=> dispatch(decreaseQuantity(item.id))} 
                    className="bg-gray-200 px-3 py-1 hover:bg-gray-300 rounded transition">
                      ➖
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button onClick={()=> dispatch(addToCart(item))}
                    className="bg-gray-200 px-3 py-1 hover:bg-gray-300 rounded transition">
                      ➕
                    </button>
                </div>
                <button onClick={()=> dispatch(removeFromCart(item.id))}
                  className="text-white bg-pink-500 hover:bg-pink-600 rounded transition px-3 py-1">Remove</button>
              </div>
            ))}
          </div>
        )
      }
      <div className="mt-6 text-right">
        <h2 className="text-2xl font-bold">Total: ${total}</h2>
        <button className="text-pink-200 bg-pink-400 hover:bg-pink-500 mt-3 transition w-full py-4  rounded-lg">Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;