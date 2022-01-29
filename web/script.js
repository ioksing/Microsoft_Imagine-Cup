function sendJSON() {

    let result = document.querySelector('#result');
    let height = document.querySelector('#height');
    let weight = document.querySelector('#weight');
    let age = document.querySelector('#age');
    let presugar = document.querySelector('#presugar');
    let carbo = document.querySelector('#carbo');

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://52.196.243.199:80/getResult";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {


            // Print received data from server
            prediction = this.responseText;
            result.style.color = "greenyellow"
            result.innerHTML = Math.round(prediction * 100) / 100
            if (prediction >= 180) {
                result.style.color = "red"
            }

        }
    };

    // Converting JSON data to string

    var data = JSON.stringify({
        "height": parseFloat(height.value),
        "weight": parseFloat(weight.value),
        "age": parseInt(age.value),
        "preSugar": parseFloat(presugar.value),
        "carbo": parseFloat(carbo.value)
    });
    console.log(data)
    // Sending data with the request
    xhr.send(data);
}