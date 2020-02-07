import React from "react"
import "./styles.css";


const useNasaData = (props) => {
    return (
        <div className="card-col-left">
            <img alt="APOD" className="card-img" src={props.hdurl} />
        </div>
    )
}

export default useNasaData