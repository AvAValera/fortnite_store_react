import React, { useState, useEffect } from "react";
import "../App.css";
import StoreList from "../components/StoreList/StoreList.jsx";
import Preloader from "../components/Preloader/Preloader";
import Cart from "../components/Cart/Cart";
import CartList from "../components/CartList/CartList";

export default function Store() {
    const [dataItems, setDataItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartList, setCartList] = useState(false);

    useEffect(function () {
        fetch("https://fortniteapi.io/v2/shop?lang=ru", {
            headers: {
                Authorization: "9a2873fa-b236b2b9-a328522c-56e147f4",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setDataItems(data.shop);
                setLoading(false);
            });
    }, []);

    function addInCart(item) {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.offerId === item.offerId
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
    }

    function showCartList(){
        setCartList(!isCartList)
    }
    function delCartItem(itemId){
        const newOrderList = order.filter(el => el.offerId !== itemId);
        setOrder(newOrderList);
    }
    function addQuantity(itemId){
        const newQuantity = order.map(el => {
            if(el.offerId === itemId){
                const newOrder = {
                    ...el,
                    quantity: el.quantity + 1
                }
                return newOrder;
            }
            else{
                return el;
            }
        })
        setOrder(newQuantity)
    }
    function removeQuantity(itemId){
        const newQuantity = order.map(el => {
            if(el.offerId === itemId){
                const newOrder = {
                    ...el,
                    quantity: el.quantity <= 0 ? 0 : el.quantity - 1
                }
                return newOrder;
            }
            else{
                return el;
            }
        })
        setOrder(newQuantity)
    }
    return (
        <main className="Store">
            <Cart quantity={order.length} showCartList={showCartList}/>
            {loading ? (
                <Preloader />
            ) : (
                <StoreList data={dataItems} addInCart={addInCart} />
            )}
            {isCartList ? <CartList 
                order={order} 
                showCartList={showCartList} 
                delCartItem={delCartItem}
                addQuantity={addQuantity}
                removeQuantity={removeQuantity}
                /> : null}
        </main>
    );
}
