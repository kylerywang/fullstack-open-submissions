import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = () => {
    const allCountries = axios.get(`${baseUrl}/api/all`).then(response => response.data)
    return allCountries
}

export default {getAll}