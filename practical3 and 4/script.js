async function getWeather() {
    let city = document.getElementById("city").value;

    if (city == "") {
        return alert("Enter a city name.");
    }

    try {
        let res= await fetch("https://wttr.in/" + city + "?format=j1");
        let data = await res.json();

        let w = data.current_condition[0];

        document.getElementById("result").innerHTML =
            "<h3>" + city + "</h3>" +
            "Condition: " + w.weatherDesc[0].value + "<br>" +
            "Humidity: " + w.humidity + "%";

    } catch {
        document.getElementById("result").innerHTML =
            "Unable to get weather information.";
    }
}
