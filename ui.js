//ui.js
export const renderCity = (data, listElement) => {
    const { main, name, sys, weather } = data;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

    const li = document.createElement("li");
    li.classList.add("city");

    const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup> C</sup></div>
        <figure>
            <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}"/>
            <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
        <button class="delete-btn">Sil</button>
    `;

    li.innerHTML = markup;
    listElement.appendChild(li);//

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });
};


export const showMessage = (message, type = 'success') => {
  const msg = document.querySelector(".msg");
  msg.textContent = message;

  
  if (type === "error") {
    msg.style.color = "red";
  } else {
    msg.style.color = "green"; 
  }
};


export const clearInput = () => {
    const input = document.querySelector(".top-banner input");
    input.value = "";
    input.focus();
};

export const isCityExist = (city, listElement) => {
    const listItems = listElement.querySelectorAll(".city");
    return Array.from(listItems).some((el) => {
        const cityName = el.querySelector(".city-name span").textContent.toLowerCase();
        return cityName === city.toLowerCase();
    }); //false donerse apiden cek
};
