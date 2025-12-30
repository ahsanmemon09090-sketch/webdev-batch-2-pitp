import {useState}  from 'react'
import './app.css'

function App() {

    const [weather, setWeather] = useState()
    const [city, setCity] = useState("")
    
    const fetchWeather = async() =>{

        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c0b0f16620eb495ebc9103908253012&q=${city}&aqi=no`)

       const data =await response.json()

       setWeather(data)
    }
    return(
        <>
        <input type='text' value={city} placeholder='enter acity name...' onChange={(event)=>setCity(event.target.value)}></input>
        <h1>{weather?.location.name}</h1>
        <h2>tempreture: {weather?.current.temp_c}°C</h2>
        <h2>codition: <img src={weather?.current.conditon.icon}/> </h2>
        <button type='button' onclick={fetchWeather}>Show Weather</button>
    
        </> 
    )
}

export default <App className="jsx"></App>

