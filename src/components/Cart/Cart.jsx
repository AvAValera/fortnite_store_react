import React from 'react'
import './Cart.css'
export default function Cart(props) {
    const {quantity} = props;
    return (
        <div className="Cart green">
            <i className="smal material-icons">shopping_cart</i>
            <span className="quantity">{quantity}</span>
        </div>
    )
}
