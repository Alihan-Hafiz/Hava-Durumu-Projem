//Storage.js
export const saveCity = (cityName) => {
    let cities = JSON.parse(localStorage.getItem("cities")) || [];

     if (!cities.includes(cityName)) {
        cities.push(cityName);

      }   

       localStorage.setItem("cities", JSON.stringify(cities));

};

export const loadCities = () => {
     return JSON.parse(localStorage.getItem("cities")) || [];
}