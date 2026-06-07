import { useEffect, useState } from "react";
import { getProducts } from "../utils/_DATA";
import Card from "./Card";

const FeaturedProducts =()=>{

const [products, setProducts]=useState([]);

useEffect(()=>{
  getProducts().then((data)=> setProducts(data))
},[]);

return (
  <section className="mt-10">
    <h2 className="text-2xl font-bold mb-6 text-center">Featured Flowers</h2>
    {
      products.length==0 ?(
        <p>...Loading</p>
      ):(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {
            products.map((product)=>(
              <Card key={product.id} product={product}/>
            ))
          }
        </div>
      )
    }
  </section>
);

}

export default FeaturedProducts;