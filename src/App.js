import React, {useState, useEffect} from "react"
import axios from 'axios'
import "./App.css";

import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"

function App() {
    const apiKey = "CecIldgQmXLCCTnr02fOh2srCshbmyIYKYPHc7EA"
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(res => { setApiData(res.data) })
            .catch(err => { console.log('axios error: ', err.data) })
    }, [])

    return (
        <div className="App">
            <Header />
            <Card />
            <Footer />
        </div>
    );
}

export default App;
