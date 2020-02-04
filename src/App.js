import React, {useState, useEffect} from "react"
import axios from 'axios'
import "./App.css";

import Header from "./header/Header"
import Card from "./card/Card"
import Footer from "./footer/Footer"

function App() {
    const apiKey = "CecIldgQmXLCCTnr02fOh2srCshbmyIYKYPHc7EA"
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`).then(res => {setApiData(res.data)}).catch(err => {console.log('axios error: ', err.data)})
    }, [])

    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
