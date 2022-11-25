fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => { displayGlobalData(data.Global) })

const displayGlobalData = (data) => {
  const globalContainer = document.getElementById('global-statistics');
  globalContainer.innerHTML = `
    <h1>Global Statistics</h1>

    <h3> New Confirmed: ${data.NewConfirmed}</h3>
    <h3> New Death: ${data.NewDeaths}</h3>
    <h3> Total Death: ${data.TotalDeaths}</h3>
    <h3> New Recovered: ${data.NewRecovered}</h3>
    <h3> Total Recovered: ${data.TotalRecovered}</h3>
  <p> Last Modified: ${data.Date.slice(0, 10)}</p>
    `
}

const searchCountry = () => {
  fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => { displayCountryData(data.Countries) })
}


const displayCountryData = (countries) => {
  for (let i = 0; i < countries.length; i++) {
    const countryName = countries[i].Country;

    let inputText = document.getElementById('search-field').value;
    if (countryName.toLowerCase() === inputText.toLowerCase()) {
      const countryContainer = document.getElementById('country-statistics');
      countryContainer.innerHTML = `<h1>${countryName}</h2>
      
      <h3> New Confirmed: ${countries[i].NewConfirmed}</h3>
        <h3> New Death: ${countries[i].NewDeaths}</h3>
        <h3> Total Death: ${countries[i].TotalDeaths}</h3>
         <h3> New Recovered: ${countries[i].NewRecovered}</h3>
        <h3> Total Recovered: ${countries[i].TotalRecovered}</h3>
        <p> Last Modified: ${countries[i].Date.slice(0, 10)}</p>

      `

      document.getElementById('country-statistics').style.display='block';
      document.getElementById('search-field').value=' ';

    }

    
  }
}

