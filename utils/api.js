//api.js
const apikey = 'fce2d9f3b635dc2ebaea57d0ae6c4ea6';

export const getWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response = await fetch(url);

   if (!response.ok) throw new Error("Şehir bulunamadı");

    return await response.json();
};
