import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"
import Cart from "./components/Cart"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState({});

  return (
    <div className="App">
      <div className="title">
      <h1>April's Bakery</h1> 
      </div>
      <div className="page">
        <div className="items">
        {bakeryData.map((item, index) => (
          <BakeryItem item={item} totalPrice={totalPrice} setTotalPrice={setTotalPrice} cartItems={cartItems} setCartItems={setCartItems} key={index}></BakeryItem> // replace with BakeryItem component
        ))}
        </div>

        <div>
          <Cart totalPrice={totalPrice} cartItems={cartItems}></Cart>      
        </div>
      </div>
    </div>
  );
}

export default App;
