const baseURL = 'https://ghibliapi.herokuapp.com/vehicles';

const display = (vehicles) => {
    let vehicleName1 = vehicles[0].name
    let vehicleName2 = vehicles[1].name
    let vehicleName3 = vehicles[2].name

    let aDg = vehicles[0].description
    let rW = vehicles[1].description
    let sB = vehicles[2].description

    document.getElementById('ve1').innerText = vehicleName1 //+ '. ' + aDg
    document.getElementById('ve1Description').innerText = aDg
    document.getElementById('ve2').innerText = vehicleName2 //+ '. ' + rW
    document.getElementById('ve2Description').innerText = rW
    document.getElementById('ve3').innerText = vehicleName3 //+ '. ' + sB
    document.getElementById('ve3Description').innerText = sB
}

fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        display(data)
        console.log(data)
    })