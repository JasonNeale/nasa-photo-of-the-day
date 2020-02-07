import React, { useState, useEffect } from "react"
//import Prismic from 'prismic-javascript'
import { Date } from 'prismic-reactjs'
import Moment from 'moment'
import axios from "axios";
import "./styles.css";

import CardHeader from "./comp_card_header/compCardHeader"
import CardLeft from "./comp_card_left/compCardLeft"
import CardRight from "./comp_card_right/compCardRight"
import CardFooter from "./comp_card_footer/compCardFooter"


const useNasaData = () => {
    const apiKey = "CecIldgQmXLCCTnr02fOh2srCshbmyIYKYPHc7EA"
    const [apiData, setApiData] = useState([])

    useEffect(() => {axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`).then(res => { setApiData(res.data) }).catch(err => { console.log('axios error: ', err.data) })}, [])

    const timestamp = Date(apiData.date)
    const formattedDate = Moment(timestamp).format("MMMM Do, YYYY");

    return (
        <div className="card-wrapper">
            <CardHeader title={apiData.title} />
            <div className="card-content-wrapper">
                <CardLeft hdurl={apiData.hdurl} />
                <CardRight formattedDate={formattedDate} url={apiData.url} hdurl={apiData.hdurl} />
            </div>
            <CardFooter explanation={apiData.explanation}/>
        </div>       
    )
}

export default useNasaData