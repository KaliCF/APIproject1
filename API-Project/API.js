const baseURL = 'https://ghibliapi.herokuapp.com/vehicles/';

const display = (vehicles) => {
    let vehic1 = vehicles.results[0].name
    let vehic2 = vehicles.results[1].name
    let vehic3 = vehicles.results[2].name
}

fetch(baseURL)
    .then(response => response.json())
    .then(data => display(vehicles))
