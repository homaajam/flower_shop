import { useState, useEffect } from "react";
import { getProducts } from "../../utils/_DATA";
import Card from "../Card";

const Products =()=>{

  const [products, setProducts]=useState([]);
  const [search, setSearch]=useState("");

  const filterProducts=products.filter((product)=> product.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(()=>{
    getProducts().then((data)=>{
      setProducts(data);
  });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-center text-3xl font-bold mb-6">All Flowers</h2>

      <input type="text"
        placeholder="search flowers..."
        className="w-full rounded border mb-6 p-3 bg-pink-50 placeholder-pink-500 hover:border-pink-500"
        onChange={(e)=> setSearch(e.target.value)}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length == 0 ? (<h1>...Loading</h1>) :
        (filterProducts.map((product)=>(
          <Card key={product.id} product={product}/>
        )))
        }
      </div>
    </div>
  )
}

export default Products;