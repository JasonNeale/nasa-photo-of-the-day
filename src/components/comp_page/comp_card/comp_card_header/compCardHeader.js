import React from "react"
import "./styles.css";


const cardHeader = (props) => {
    return (
        <div className="card-header-wrapper">
            <div className="card-header">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default cardHeader