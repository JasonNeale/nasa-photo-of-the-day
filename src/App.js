import React from "react"
import "./App.css";

import Header from "./components/comp_header/compHeader"
import Page from "./components/comp_page/compPage"
import Footer from "./components/comp_footer/compFooter"

function App() {
    return (
        <div className="App">
            <Header />
            <Page />
            <Footer />
        </div>
    );
}

export default App;
