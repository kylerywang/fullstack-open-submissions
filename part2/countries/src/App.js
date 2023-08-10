import {useState, useEffect} from 'react'
import Countries from './components/Countries';
import countriesService from './services/countries'
import Country from './components/Country'


function App() {
  const [input, setInput]=useState('')
  const [countries, setCountries] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)
  
  const handleChange = (e) => {
    setInput(e.target.value)
  }
 
  useEffect(() =>{
    setSelectedCountry(null)
    countriesService.getAll()
    .then(response => {
      const filteredCountries = response.filter(country => country.name.common.toLowerCase().includes(input))
      if (filteredCountries.length === 1) {
        setSelectedCountry(filteredCountries[0]);
      }   
      setCountries(filteredCountries)
    })
  }, [input])

  return (
    <div>
    <form>find countries
      <input onChange={handleChange}></input>
    </form>
    {selectedCountry ? 
    <Country country={selectedCountry}></Country> :
    <Countries input={input} countries={countries} setSelectedCountry={setSelectedCountry}/>
    }
    </div>
  );
}

export default App;
