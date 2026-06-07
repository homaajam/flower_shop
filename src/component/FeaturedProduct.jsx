import { useEffect, useState } from "react";
import { getProducts } from "../utils/_DATA";
import Card from "./Card";

const FeaturedProducts =()=>{

const [products, setProducts]=useState([]);

useEffect(()=>{
  getProducts().then((data)=> setProducts(data))
},[]);

return (
  <section>
    <h2>Featured Flowers</h2>
    {
      products.length==0 ?(
        <p>...Loading</p>
      ):(
        <div>
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