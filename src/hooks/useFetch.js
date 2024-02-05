import axios from 'axios'
import { useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

const getApi = url => {
    setLoading(true)
    axios.get(url)
    .then(res => {
        setData(res.data)
        setError(false)
        })
    .catch(err => {
        console.log(err)
        setError(true)
    })
    .finally(setLoading(false))
}

  return [getApi, data, error, loading]
}

export default useFetch