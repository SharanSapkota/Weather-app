import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import Input from './Input'

function Api() {
    const [getApi, setGetApi] = useState("")
    const [value, setValue] = useState()

    const city = "kathmandu"
    const api = async() => {
    const abc = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=ff45550de25bb5c679dc44d56a5dd20c`)
    .then(response => {const tempValue = response.data.main
       return tempValue
      
    })
    console.log(abc)
    setGetApi(abc)
// console.log(getApi)
  //  returnabc
  
}

console.log(getApi)
console.log(value)
   
    return (
        <div>
            <input type="text" placeholder="Enter name of place" onChange={(e) => setValue(e.target.value)}></input>
          <button onClick={api}> view Weather </button>
        
          {getApi ?  
          <div>
          <label>Temperature: {getApi.temp - 273} degree Celsius</label><br />
          <label>Feels like: {getApi.feels_like - 273}</label><br />
          <label>Pressure: {getApi.pressure}</label><br />
          <label>Humidity: {getApi.humidity}</label><br />
          </div>
          : "Enter valid city name"} 
       {/* */}
        </div>
    )
}

export default Api
