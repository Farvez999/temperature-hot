const API_KEY = `f7a43ff194a52f38334de22cf98f5f58`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => disPlayTemp(data))
}

const disPlayTemp = data => {
    // console.log(data.main.temp)
    //const temperature = document.getElementById('temp');
    setInnerTextByID('temp', data.main.temp);
    setInnerTextByID('condition', data.weather[0].main);
    // console.log(data)
}

const setInnerTextByID = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city 
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})

loadTemperature('dhaka');