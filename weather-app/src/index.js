import './style.css';

// DOM elements selection.
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const fahrenheitBtn = document.querySelector(".f-button");
const celsiusBtn = document.querySelector(".c-button");
const degreeDiv = document.querySelector(".degree-div");
const infoDiv = document.querySelector(".info-div");

let currentTempFahrenheit; 

// Search button trigger event.
searchBtn.addEventListener('click', async () => {
    if (searchBar.value !== "") {
        let queryLocation = searchBar.value;
        await displayContent(queryLocation);
    } else {
        return;
    }
});

// Fahrenheit button event listener
fahrenheitBtn.addEventListener('click', () => {
    if (currentTempFahrenheit !== undefined) {
        degreeDiv.textContent = `${currentTempFahrenheit}°F`;
        toggleButtonColors(fahrenheitBtn, celsiusBtn);
    }
});

// Celsius button event listener
celsiusBtn.addEventListener('click', () => {
    if (currentTempFahrenheit !== undefined) {
        const tempCelsius = convertToCelsius(currentTempFahrenheit);
        degreeDiv.textContent = `${tempCelsius}°C`;
        toggleButtonColors(celsiusBtn, fahrenheitBtn);
    }
});

// Convert Fahrenheit to Celsius
const convertToCelsius = (fahrenheit) => {
    return Math.round((fahrenheit - 32) * 5 / 9);
};

// Fetch data from Visual Crossing API
const fetchData = async (queryLocation) => {
    try{
        const apiKey = "KRSG2YG3QB26UYWSGVHSA8EKJ";
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryLocation}?unitGroup=us&key=${apiKey}&contentType=json`);
        const fetchedObject = await response.json();
    
        return fetchedObject;
    }
    catch(err){
        degreeDiv.textContent = "No data";
        infoDiv.textContent = "Enter Valid Location!";
    }
};

// Render weather data
const displayContent = async (queryLocation) => {
    const displayObject = await fetchData(queryLocation);
    const displayData = arrayData(displayObject);

    currentTempFahrenheit = displayData[0]; // Store the Fahrenheit temperature
    degreeDiv.textContent = `${currentTempFahrenheit}°F`;
    infoDiv.textContent = displayData[1];

    // Ensure Fahrenheit button is highlighted initially
    toggleButtonColors(fahrenheitBtn, celsiusBtn);
};

// Convert large Object to array with only necessary values
const arrayData = (fetchedObject) => {
    return [
        fetchedObject.currentConditions.temp,
        fetchedObject.currentConditions.conditions
    ];
};

// Toggle button background colors
const toggleButtonColors = (activeBtn, inactiveBtn) => {
    activeBtn.style.backgroundColor = "#B6BBC4";
    inactiveBtn.style.backgroundColor = "white";
};
