async function get_weather(){
    
    // const cities_box = document.getElementById("cities_box");

    const response = await fetch(`http://api.weatherstack.com/current?access_key=39192e0453c08324b003f42b786ddc5f&query=Venezuela`);

    const json = response.json();
    display_options(json);
}


function display_options(cities) {
    const cities_box = document.getElementById("cities_box");

    let list = "<option>Select a user</option>";
    for (const weather of cities) {
        list += `<option value=${weather.query}>${weather.query}</option>`;
    }
    cities_box.innerHTML = list;
}




