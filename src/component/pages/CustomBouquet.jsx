import { getProducts, getWraps, getRibbons } from "../../utils/_DATA";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { generateBouquetImage } from "../../utils/ai";
const CustomBouquet =()=>{
  const dispatch=useDispatch();
  const [flowers, setFlowers]=useState([]);
  const [wraps, setWraps]=useState([]);
  const [ribbons, setRibbons]=useState([]);
  const [selectedFlowers, setSelectedFlowers]=useState([]);
  const [wrap, setWrap]=useState(null);
  const [ribbon, setRibbon]=useState(null);
  const [image, setImage]=useState("");

  const handleGenerate=async()=>{
    if(!selectedFlowers || !wrap || !ribbon){
      alert("Select all options");
      return;
    }
    const img=await generateBouquetImage(
      selectedFlowers,
      wrap,
      ribbon
    );
    setImage(img);
  };
  

  useEffect(()=>{
    Promise.all([
      getProducts(),
      getWraps(),
      getRibbons()
    ]).then(([f, w, r])=>{
      setFlowers(f);
      setWraps(w);
      setRibbons(r);
    });
  },[])

  if(!flowers.length || !wraps.length || !ribbons.length){
    return <h2 className="p-6">Loading...</h2>;
  }

  const addFlower=(flower)=>{
    const exists=selectedFlowers.some((f) => f.id === flower.id);
    if(exists){
      setSelectedFlowers(selectedFlowers.filter((f)=> f.id !== flower.id));
    }else{
      setSelectedFlowers([...selectedFlowers, flower])
    }
  }
  const addWrap=(w)=>{
    if(wrap?.id === w.id){
      setWrap(null);
    }else{
      setWrap(w);
    }
  }
  const addRibbon=(r)=>{
    if(ribbon?.id === r.id){
      setRibbon(null);
    }else{
      setRibbon(r);
    }
  }

  
  const handleAddToCart=()=>{
    selectedFlowers?.forEach((flower)=>{
      if (flower) dispatch(addToCart(flower))});
    if (wrap) dispatch(addToCart(wrap));
    if (ribbon) dispatch(addToCart(ribbon));
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Custom Your Own Bouquet</h1>
      <h2 className="mb-2 font-semibold">Flowers</h2>

      <div className="flex gap-4 overflow-x-auto mb-6">
        {flowers.map((flower)=>{
          const isSelected = selectedFlowers.some((f) => f.id === flower.id);
          return (
            <div key={flower.id}
            onClick={()=> addFlower(flower)}
            className={`cursor-pointer w-32 p-2 rounded-lg border-2 
              ${isSelected ? "border-pink-500" : ""}`}>
              <img className="w-full h-20 object-cover rounded" src={flower.image}/>
              <p className="text-center text-sm mt-2">{flower.name}</p>
            </div>
          )
        })}
      </div>

      <h2 className="mb-2 font-semibold">Wrap</h2>
      <div className="flex gap-4 overflow-x-auto mb-6">
        {wraps.map((w)=>{
          return (
            <div key={w.id}
            className={`cursor-pointer w-32 p-2 rounded-lg border-2 
              ${wrap?.id === w.id ? "border-pink-500" : ""}`}
            onClick={()=> addWrap(w)}>
              <img src={w.image} className="w-full h-20 object-cover rounded"/>
              <p className="text-center text-sm mt-2 pb-5">{w.name}</p>
            </div>
          )
        })}
      </div>

      <h2 className="mb-2 font-semibold">Ribbon</h2>
      <div className="flex gap-4 overflow-x-auto mb-6">
        {ribbons.map((r)=>{
          return (
            <div key={r.id}
            onClick={()=> addRibbon(r)}
            className={`cursor-pointer w-32 p-2 rounded-lg border-2 
              ${ribbon?.id === r.id ? "border-pink-500" : ""}`}>
              <img src={r.image} className="w-full h-20 object-cover rounded"/>
              <p className="text-center text-sm mt-2 pb-5">{r.name}</p>
            </div>
          )
        })}
      </div>
      <div>
        <button onClick={handleGenerate}
        className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition"
        >Generate Bouquet</button>
        {image && <img src={image} alt="bouquet" />}
      </div>
      <div>
        <button onClick={()=> handleAddToCart()}
          className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition">Add To Cart</button>
      </div>
    </div>
  )
}

export default CustomBouquet;