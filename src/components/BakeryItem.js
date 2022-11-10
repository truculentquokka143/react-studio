// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {

    function addToCart(props) {
        props.setTotalPrice(props.totalPrice + props.item.price);
        if (props.item.name in props.cartItems) {
            props.cartItems[props.item.name]++;
            props.setCartItems(props.cartItems);
        } else {
            props.cartItems[props.item.name] = 1;
        };
    }
    

    return (
      <div className="bakery-item">
        <div>
        <img className="dessert-photo" src={props.item.image} alt="dessert"></img>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        </div>
        <div className="price-and-cart">
            <p className="price">{props.item.price}</p>
            <button onClick={() => addToCart(props)}>Add To Cart</button>
        </div>
      </div>
    );
    }
