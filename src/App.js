import Card from './Card.js';
import { useEffect, useState } from 'react';


const App = () => {
    const url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
    const [countries, setCountries] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setCountries(data);
            }catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    },[]);

    const handleChange = (e) => {
      if(e.target.value.length > 0){
        const filtered = countries.filter((country) => {
          return country.common.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setFilteredCountries(filtered);
      }
      else{
        setFilteredCountries([]);
      } 
    };

    return (
      <div  style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop:'20px'}}>
          <div style={{width:"50%"}}>
            <input type="text" style={{width:"100%"}} 
                    placeholder='Search for countries'
                    value={searchData} onChange={(e)=>{handleChange(e);setSearchData(e.target.value);}} />
          </div>
          <div style={{
              padding: '15px',
              display: 'flex',
              gap:'15px',
              flexWrap: 'wrap',
              marginLeft: '20px',
            }}>
              {filteredCountries.length>0 ? 
                  filteredCountries.map(({common,png})=>{
                  return <Card key={common} name={common} flag={png}/>})
                  : searchData!="" ? filteredCountries.map(({common,png})=>{
                    return <Card key={common} name={common} flag={png}/>})
                    : countries.map(({common,png})=>{
                  return <Card key={common} name={common} flag={png}/>})
              }
          </div>
      </div>
    );

};

export default App;