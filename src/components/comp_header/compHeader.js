import React from "react"
import "./styles.css";


const createHeader = () => {
    return (
        <div className="header-wrapper">
            <div className="header-inner-wrapper">
                <div className="header-logo"><img alt="nasa logo" src="img/logo.png" /></div>
                <div className="header-title">
                    <h1>APOD APP</h1>
                </div>
            </div>
        </div>
    )
}

export default createHeader