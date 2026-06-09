import { useState, useEffect } from "react";
import { getProducts } from "../../utils/_DATA";
import Card from "../Card";

const Products =()=>{

  const [products, setProducts]=useState([]);
  useEffect(()=>{
    getProducts().then((data)=>{
      setProducts(data);
  });
  }, []);

  return (
    <div className="ax-w-6xl mx-auto p-4">
      <h2 className="text-center text-3xl font-bold mb-6">All Flowers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product)=>(
          <Card key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Products;