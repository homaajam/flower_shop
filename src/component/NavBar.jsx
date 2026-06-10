import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar =()=>{
  const items =useSelector((state)=>state.cart.items);
  return (
    <nav className="flex justify-between items-center shadow-md p-4">
      <h1 className="text-xl font-bold">🌸 FlowerShop</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/custom-bouquet">CustomBouquet</Link>
        <Link to="/cart">Cart({items.length})</Link>
      </div>
    </nav>
  );
}

export default NavBar;