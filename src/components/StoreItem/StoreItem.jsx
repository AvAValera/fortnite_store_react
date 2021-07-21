import React from "react";
import "./StoreItem.css";
export default function StoreItem(props) {
    const { displayName, displayDescription, offerId, price, displayAssets, addInCart = Function.prototype } =
        props;
    const finPrice = price.finalPrice
    return (
        <div className="card" id={offerId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt="img" />
            </div>
            <div className="card-content">
                <span style={{fontSize: "20px", fontWeight: "bold"}} className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button onClick={() => addInCart({offerId, displayName, finPrice})} className='waves-effect waves-light left btn'>Купить</button>
                <p className="right price" style={{fontSize: '1.8rem'}}>{finPrice} Coin</p>
            </div>
        </div>
    );
}
