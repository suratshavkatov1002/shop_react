export default function BasketItem(props) {
   const {id, name, price, quantity, decrementQuantity, incrementQuantity} = props;
   return(
      <li className="collection-item">
         {name} x {quantity} = {price * quantity} $
         <span className="secondary-content">
            <button className="btn" onClick={() => incrementQuantity(id)} >add</button>
            <button className="btn" onClick={() => decrementQuantity(id)}>remove</button>
            <i className="material-icons" onClick={() => props.removeFromBasket(id)}>delete_forever</i>
         </span>
      </li>
   )
}