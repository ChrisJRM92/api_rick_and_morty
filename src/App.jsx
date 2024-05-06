import { useEffect, useRef, useState } from "react"
import useFetch from "./hooks/useFetch"
import getRandomNumber from "./utils/getRandomNumber"
import LocationInfo from "./components/LocationInfo"
import ResidentCard from "./components/ResidentCard"
import '../src/App.css'


function App() {

  
  const [locationId, setlocationId] = useState(getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  
  const [locationData, getlocationData, hasError] = useFetch(url)

  useEffect(() => {
    getlocationData()
  },[locationId])

  const inputId = useRef()

  const submitData = e =>{
    e.preventDefault()
    setlocationId(inputId.current.value.trim())
  }

  return (
    <>
      <div className="menu"></div>
      <h1>Rick y Morty API</h1>
      <p>Este proyecto consume información de la API oficial de <a href="https://rickandmortyapi.com/" target="_post">Rick and Morty API</a>. ingresa valores entre 1 - 126 para conocer los personajes en cada lugar</p>
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <form onSubmit={submitData}>
          <input ref={inputId} type="text" />
          <button className="button_button">Buscar</button>
        </form>
      </div>
    {
      hasError ? (<h2 className="errorvalue">👽 Valor no valido. Por favor ingresa un valor entre 1-126</h2>
    ) : (
      <>
        <LocationInfo locationData = {locationData}/>
        <div className="contentP">
          {
            locationData?.residents.map((url) => (
              <ResidentCard key={url} url={url}/>
            ))}
        </div>
        </>
      )
    }
    </>
  )
}

export default App
