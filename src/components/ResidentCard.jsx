import '../components/ResidentCard.css'
import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const ResidentCard = ({url}) => {
  
  const [resident, getresident] = useFetch(url)

  useEffect(()=>{
    getresident()
  },[])
  
  console.log(resident)
  return (
    <article className="resident">
      <header className="resident__header">
        <img className="resident__image" src={resident?.image} alt="" />
        <div className="resident__status__container">
          <div className={`resident__status__circle ${resident?.status}`}></div>
          <div className="resident__status">{resident?.status}</div>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident_name">{resident?.name}</h3>
        <hr className="resident__hr" />
        <ul className="resident__list">
          <li className="resident__item">
            <span className="resident__label">Especie:</span>
            <span className="resident__value"> {resident?.species}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Origen:</span>
            <span className="resident__value"> {resident?.origin.name}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Visto en episodio:</span>
            <span className="resident__value">{resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard