import React from 'react'

export default function CartItemList(props) {
    return (
        <div>
            <p className="collection-item">{props.displayName} x {props.quantity} = {props.finPrice}</p>
        </div>
    )
}
