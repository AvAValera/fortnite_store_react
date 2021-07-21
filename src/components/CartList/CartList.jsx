import React from 'react'
import './CartList.css'
import CartItemList from './CartItemList'
export default function CartList(props) {
    return (
        <div className="collection CartList">
            <i onClick={() => props.showCartList()} className="small material-icons CloseCartList">close</i>
            <div className="collection-item active CartHeader">Корзина заказов</div>
            {props.order.map(el=> <CartItemList key={el.offerId} {...el} />)}
            <div className="collection-item active">Итого:</div>
        </div>
    )
}
