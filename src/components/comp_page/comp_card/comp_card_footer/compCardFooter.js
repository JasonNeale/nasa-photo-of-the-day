import React from "react"
import "./styles.css";


const useNasaData = (props) => {
    return (
        <div className="card-footer-wrapper">
            <div className="card-footer">
                <p>
                    {props.explanation}
                </p>
            </div>
        </div>
    )
}

export default useNasaData