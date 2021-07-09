import React, { useState, useEffect } from "react";
import "../App.css";
import StoreList from "../components/StoreList/StoreList.jsx";
import Preloader from "../components/Preloader/Preloader";

export default function Store() {
    const [dataItems, setDataItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        fetch("https://fortniteapi.io/v2/shop?lang=ru", {
            headers: {
                Authorization: "9a2873fa-b236b2b9-a328522c-56e147f4",
            },
        }).then((response) => response.json())
            .then((data) => {
                setDataItems(data.shop);
                setLoading(false);
            });
    }, []);

    return (
        <main className="Store">
            {loading ? <Preloader /> : <StoreList data={dataItems} />}
        </main>
    );
}
