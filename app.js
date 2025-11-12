import { getWeatherData } from './utils/api.js';
import { renderCity, showMessage, isCityExist, clearInput } from './ui.js';

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".msg");
const list = document.querySelector(".ajax-section .cities");

form.addEventListener('submit', async (e) => { //ener
    e.preventDefault();
    const city = input.value.trim();

    if (isCityExist(city, list)) {
        showMessage(`Zaten ${city} şehrinin hava durmunu biliyorsun.`, "error");
        clearInput();
        return; //kontrol
    }

    try {
        const data = await getWeatherData(city);
        renderCity(data, list);
        showMessage("Hava durumu başarıyla eklendi!", "success"); // Başarı mesajı
    } catch (error) {
        showMessage("Lütfen geçerli bir şehir ara", "error"); // Hata mesajı
    }

    clearInput();    // inputu sıfırla
});

