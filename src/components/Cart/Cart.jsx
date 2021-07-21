import React from 'react'
import './Cart.css'
export default function Cart(props) {
    const {quantity, showCartList = Function.prototype} = props;
    return (
        <div onClick={() => showCartList()} className="Cart green">
            <i className="smal material-icons">shopping_cart</i>
            <span className="quantity">{quantity}</span>
        </div>
    )
}
