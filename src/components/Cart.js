export default function Cart(props) {
    console.log("RENR");
    return (
      <div className="cart">
        <p className="cart-title">Cart</p>
        <div>
            {Object.entries(props.cartItems).map((entry, index) => 
            <p className="cart-item" key={index}>{entry[1]}x {entry[0]}</p>)}
        </div>
        <p className="total-price">Total Price: ${props.totalPrice.toFixed(2)}</p>
      </div>
    );
    }