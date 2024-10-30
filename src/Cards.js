import React, { useEffect, useState } from 'react';
import './App.css';

const Cards =()=>{

    const [countries, setCountries] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
   

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Extract necessary information
        const countryData = data.map(country => ({
          flag: country.flags.svg,
          name: country.name.common,
          population: country.population,
          region: country.region,
          capital: country.capital ? country.capital[0] : 'N/A',
        }));
        setCountries(countryData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const filteredCountries = countries.filter(country =>{
    const matchesSearchTerm = country.name.toLowerCase().includes(searchItem.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearchTerm && matchesRegion;
  }
  );

    return(
        <>
        <div className="container">

        <div className='row my-5'>
            <div className='col-md-4'>
                <input type='text' className='bg-white  shadow w-100 py-2 px-4 border-0' placeholder='Search for  a country'
                value={searchItem} onChange={handleSearch}/>
               
            </div>
            <div className='col-md-3 ms-auto'>
            <select className='form-select shadow' value={selectedRegion} onChange={handleRegionChange}>
            <option value=''>Filter by Region</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
            </div>
        </div>

            <div className="row mt-5">
                
                {filteredCountries.map((country, index) => (
          <div className="col-md-3 px-4 mb-5" key={index}>
            <div className="card h-100 shadow-sm mb-4">
              <img src={country.flag} className="card-img-top" alt={`Flag of ${country.name}`} />
              <div className="card-body">
                <h5 className="card-title my-3">{country.name}</h5>
                <p className="card-text">
                <strong>Population:</strong> {country.population}<br />
                  <strong>Region:</strong> {country.region}<br />
                  <strong>Capital:</strong> {country.capital}
                </p>
               
              </div>
            </div>
          </div>
        ))}
                
            </div>
        </div>
        </>
    )
}
export default Cards;