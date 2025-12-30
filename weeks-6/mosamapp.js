import ( usestate ) ffrom 'react'
import rectlogo from './assets/react.svg'
import vitelogo from '.vite.svg'
import './app.css'

function app() {

    const [wheather, setwheather] = usestate()

    
    const fetchwheather = async() =>{

        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=c0b0f16620eb495ebc9103908253012&q=hyderabad pakistan&aqi=no')

       const data =await response.json()

       setwheather(data)
    }
    return(
        <>
        <input type='text' value={city} placeholder='enter acity name...' onChange={(event)=>setcity(event.target.value)}></input>
        <h1>{wheather?.location.name}</h1>
        <h2>tempreture: {wheather?.current.temp_c}°C</h2>
        <h2>codition: <img src={wheather?.current.conditon.icon}/> </h2>
        <button type='button' onclick={fetchwheather}>show wheather</button>
    
        </> 
    )
}

export default app


