import React from "react"
import "./styles.css";


const useNasaData = (props) => {
    return (
        <div className="card-col-right">
            <p>
                <h3>Date:</h3>
                {props.formattedDate}
            </p>
            <p>
                <h3>Image:</h3>
                SD: <a target="_blank" without rel="noopener noreferrer" href={props.url}>View/Download</a>
                <br />
                HD: <a target="_blank" without rel="noopener noreferrer" href={props.hdurl}>View/Download</a>
            </p>
        </div>
    )
}

export default useNasaData