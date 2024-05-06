import '../App.css'

const LocationInfo = ({locationData}) => {
    console.log(locationData)
    return (
    <div className='location'>
        <h2>{locationData?.name}</h2>
        <ul>
            <li>
                <span>Lugar:</span>
                <span>{locationData?.type}</span>
            </li>
            <li>
                <span>Dimensión</span>
                <span>{locationData?.dimension}</span>
            </li>
            <li>
                <span>Personajes</span>
                <span>{locationData?.residents.length}</span>   
            </li>
        </ul>
    </div>
    )
}

export default LocationInfo