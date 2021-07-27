import React from 'react'
import './CartList.css'
import CartItemList from './CartItemList'
export default function CartList(props) {
    const{order = [], 
        showCartList = Function.prototype,
        delCartItem = Function.prototype,
        addQuantity = Function.prototype,
        removeQuantity = Function.prototype,
        clearCart = Function.prototype
    } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.finPrice * el.quantity;
    }, 0)

    function messageOrder(){
        if(order.length){
            alert('Спасибо за Ваш заказ, наш менеджер перезвонит Вам в ближайшее время.')
            showCartList()
            clearCart()
        }
        else{
            alert('Корзина пуста!')
        }
    }
    return (
        <div className="collection CartList">
            <i onClick={() => showCartList()} className="small material-icons CloseCartList">close</i>
            <div className="collection-item active CartHeader">Корзина заказов</div>
                {order.length ? order.map(el=> <CartItemList key={el.offerId} {...el} 
                    delCartItem={delCartItem} 
                    addQuantity={addQuantity} 
                    removeQuantity={removeQuantity}
                    />): <p className="collection-item">Корзина пуста</p>}
            <div className="collection-item Order-line">
                <p className='Total-price'>Итого: {totalPrice} Coin</p>
                <button onClick={() => messageOrder()}className='Order-button'>Оформить заказ</button>
            </div>
        </div>
    )
}
