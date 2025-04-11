function checkWeather(){
    let input = document.getElementById("weatherInput").value.toLowerCase().trim();
    let msg = document.getElementById("message");

    if (input === "sunny"){
        msg.innerText =("message").innerText = "It's sunny! wear sunglasses and apply sunscreen .";
    }else if(input === "rainy"){
        msg.innerText =("message").innerText = "It's rainy , donn't forget your umbrella";
    }else if(input === "cloudy"){
        msg.innerText =("message").innerText = "It's cloudy! you should carry a light jacket";
    }else{    
        msg.innerText =("message").innerText = "please enter sunny , cloudy or rainy.";
    }
    return;
} 
