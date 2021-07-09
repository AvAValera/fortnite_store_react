import "./App.css";
import React from "react";
import Header from "./Layer/Header";
import Store from "./Layer/Store";
import Footer from "./Layer/Footer";
function App() {
    return <div className="App">
        <Header />
        <Store />
        <Footer />
    </div>;
}

export default App;
