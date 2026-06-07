
const Card =({product})=>{

  return(
    <div>
      <img
      src={product.image}
      alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button>add to cart</button>
      </div>
    </div>
  );

}

export default Card;