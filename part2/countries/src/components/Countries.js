import CountryButton from "./CountryButton"

const Countries = ({input, countries, setSelectedCountry}) =>{
    return (
        <div>
            {
            countries ?
            countries.map(country => <CountryButton key={country.name.common} country={country}  setSelectedCountry={setSelectedCountry}/>) 
            : null
            }
        </div>
    )

}

export default Countries