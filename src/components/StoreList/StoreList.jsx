import React from "react";
import "./StoreList.css";
import StoreItem from "../StoreItem/StoreItem"
import PageNotFound from "../PageNotFound/PageNotFound"

export default function StoreList(props) {
    const {data = []} = props;
    if(!data.length){
        return <PageNotFound />
    }
    return <div className="StoreList">
        {data.map(el => <StoreItem key={el.mainId} {...el} />)}
    </div>;
}
