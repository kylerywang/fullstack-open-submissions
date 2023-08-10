const CountryButton =({country, setSelectedCountry}) =>{
    return (
            <p>{country.name.common}<button onClick={() => setSelectedCountry(country)}>show</button></p>
    )
}

export default CountryButton