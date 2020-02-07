import React from "react"
import "./styles.css";

import Card from "./comp_card/compCard"


const createPage = () => {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <Card />
            </div>
        </div>
    )
}

export default createPage