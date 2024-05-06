import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const ResidentCard = ({url}) => {
  
  const [resident, getresident] = useFetch(url)

  useEffect(()=>{
    getresident()
  },[])
  
  console.log(resident)
  return (
    <article>
      <header>
        <img src={resident?.image} alt="" />
        <div className="circle"></div>
        <div>{resident?.status}</div>
      </header>
      <section>
        <h3>{resident?.name}</h3>
        <hr />
        <ul>
          <li><span>Especie:</span><span>{resident?.species}</span></li>
          <li><span>Origin</span><span>{resident?.origin.name}</span></li>
          <li><span>Episodies where appear</span><span>{resident?.episode.length}</span></li>
        </ul>
      </section>  
    </article>
  )
}

export default ResidentCard