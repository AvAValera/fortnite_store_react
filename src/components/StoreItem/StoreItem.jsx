import React from "react";
import "./StoreItem.css";
export default function StoreItem(props) {
    const { displayName, displayDescription, offerId, price, displayAssets } =
        props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt="img" />
            </div>
            <div className="card-content">
                <span style={{fontSize: "20px", fontWeight: "bold"}} className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <p className="right price" style={{fontSize: '1.8rem'}}>{price.finalPrice} Coin</p>
                <button className='waves-effect waves-light left btn'>Купить</button>
            </div>
        </div>
    );
}
