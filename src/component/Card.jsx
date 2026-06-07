
const Card =({product})=>{

  return(
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 over:scale-[1.02] 
                transition-all duration-300 ease-out cursor-pointer">
      <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-pink-400 font-bold">${product.price}</p>
        <button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition">add to cart</button>
      </div>
    </div>
  );

}

export default Card;