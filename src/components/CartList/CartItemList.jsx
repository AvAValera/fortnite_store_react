import React from 'react'

export default function CartItemList(props) {
    return (
        <div>
            <p className="collection-item">{props.displayName} x {props.quantity} = {props.quantity * props.finPrice} Coin <button onClick={() => props.addQuantity(props.offerId)}>+</button><button onClick={() => props.removeQuantity(props.offerId)}>-</button><a href="#!" className="secondary-content"><i onClick={()=>props.delCartItem(props.offerId)} className="material-icons">close</i></a></p>
        </div>
    )
}
