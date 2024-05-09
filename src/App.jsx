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
      {/* Menu */}
      <div class="menu">
        <div class="menu_logo" href='index.html'>
          <a href="index.html"><img src="./src/assets/logo.png" alt="" /></a>
        </div>
        <div class="menu_options">
            <div class="menu_menu">
              <a href="https://rickandmortyapi.com/" target="_blank">Doc API</a>
              <div className="author">
                <a href="https://christianromero.netlify.app/#home" target="_post">Christian R |&nbsp;</a>
                <img src="./src/assets/profile1.png" alt="" />
              </div>
            </div>
            <div class="menu_hamburger"></div>
        </div>
      </div>
      {/* Home */}
      <div class="home">
        <div className="home_1"></div>
        <div className="home_2">
          <div class="home_content">
            <div class="grid_1">
              <div className="grid_1_content">
                <h1>Rick and Morty</h1>
                <hr />
                <p>Este proyecto utiliza datos de la api oficial de <a href="https://rickandmortyapi.com/" target="_blank">Rick y Morty API</a>, tiene como objetivo conocer el estado de los personajes segun su ubicación.</p>
                <div>
                  <a className="buttom_1" href="#search">Buscar personajes</a>
                  <a className="buttom_2" href="https://rickandmortyapi.com/">Ir a API</a>
                </div>
                <p className="score">Nota promedio de la serie:</p>
                <p className="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </p>
              </div>
            </div>
            <div class="grid_2">
              <div className="grid_2_img"></div>
            </div>
            <div class="grid_3">
              {/* <i class='bx bx-chevrons-down'></i> */}
              <div className="chevron_container">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Contenido */}
      <div class="content">
        <div class="content_grid">
            <div class="content_grid_1">
              <div className="content_options"> 
                <h1 id="search">Buscar personajes</h1>
                <p>Ingresa valores entre <span>1-126</span> para realizar la busqueda de los personajes. </p>
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
                      <LocationInfo locationData={locationData} />
                    </>
                  )
                }
              </div>
            </div>
            <div class="content_grid_2">
              <h2>{locationData?.name}</h2>
                <div className="content_card">
                  <div className="contentP">
                          {
                            locationData?.residents.map((url) => (
                              <ResidentCard key={url} url={url} />
                            ))}
                  </div>
                </div>
              <div className="pag">

              </div>
            </div>
        </div>
      </div>
      {/* footer */}
      <footer>
        <p>Seria animada y personajes son propiedad de <a href="https://es.wikipedia.org/wiki/Justin_Roiland" target="_blank"> Justin Roiland</a> y <a href="https://es.wikipedia.org/wiki/Dan_Harmon" target="_blank">Dan Harmon</a> para <a href="https://www.adultswim.com/" target="_blank">[AS]</a> </p>
      </footer>
      {/* ESte el search */}
      {/* <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <form onSubmit={submitData}>
          <input ref={inputId} type="text" />
          <button className="button_button">Buscar</button>
        </form>
      </div> */}
    
    {/* Error y tarjeta */}
    {/* {
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
    } */}
    </>
  )
}

export default App
