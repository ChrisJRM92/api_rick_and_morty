import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [response, setresponse] = useState()
    const [hasError, sethasError] = useState(false)
    const getApi = () =>{
        axios.get(url)
        .then(res => {
            setresponse(res.data)
            sethasError(false)
        })
        .catch(err => {
            console.log('Error de comunicacion')
            sethasError(true)
    })
    }
    return [response, getApi, hasError]
}

export default useFetch