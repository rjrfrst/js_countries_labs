const getCountryByName = (countryName) => {
    //Fetch data 
    let country = "";
    fetch (`https://restcountries.com/v3.1/name/${countryName}`)
    .then ((response) => {
        return response.json();
    })

    .then ((data) => {
        country = data[0];
        console.log(country);
    

    const displayCountryDetails = document.querySelector("#country-info"); //get the section
    //Get attributes: name, capital, languages, population 

    //Create empty element for an attribute: name
    //Add a text inside the element
    //Append the text in the section
    const name = document.createElement('h2');
    name.innerText = `Country Name: ${country.name.common}`;
    displayCountryDetails.appendChild(name);

    const population = document.createElement('p');
    population.innerText = `population: ${country.population}`;
    displayCountryDetails.appendChild(population);

    const languages = document.createElement('p');
    let countryLanguages = Object.values(country.languages); //Change the object to arrays
    languages.innerText = `languages: ${countryLanguages}`; 
    displayCountryDetails.appendChild(languages);

    const capital = document.createElement('p');
    capital.innerText = `capital: ${country.capital}`;
    displayCountryDetails.appendChild(capital);

    })


}
getCountryByName("Switzerland"); //Call the function







