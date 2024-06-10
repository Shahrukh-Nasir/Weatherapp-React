import React, { useState } from 'react'
import axios from 'axios'
import Weather from './components/Weather'

export default function App() {

    const [data, setData] = useState({})
     const [location, setLocation] = useState("")
  const API_KEY = "0ca61e9d1972e8c6e27e34cb0665e075" 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchlocation = (event) =>{
    if (event.key === "Enter"){
      axios.get(url)
      .then((response)=> {
        setData(response.data)
        console.log(response.data);
      })
      setLocation("")
    }
  }
  return (
    <div className=' w-full h-full relative'>
      <div className='text-center p-4'>
        <input type="text" className='py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-400  text-gray-400 placeholder:text-gray-600 focus:outline-none bg-white-600/100 shadow-md' 
        placeholder='Enter Location' 
        value={location}
        onChange={(event)=>setLocation(event.target.value)}
        onKeyDownCapture={searchlocation}
        />    
      </div>
      <Weather weatherData = {data}/>
    </div>
    
  )
}
