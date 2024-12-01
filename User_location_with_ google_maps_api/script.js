let latitude, longitude = "";
let map = document.querySelector("gmp-map");
let marker = document.querySelector("gmp-advanced-marker");

map.appendChild(marker);


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
else{
    alert("Tarayıcınız konum bilgisini alamıyor...");
}

async function onSuccess(position){
    let latitude = position.coords.latitude;
    let longitude =  position.coords.longitude;

    const api_key = "ef95a8992929425b96433754978bcb85";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${api_key}`;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            let details = result.results[0].components;

            let {country, postcode, province} = details;

            document.getElementById("results").innerHTML = `
            <p>Ülke: ${country} </p>
            <p>Posta kodu: ${postcode} </p>
            <p>Şehir: ${province} </p>
            `

            map.setAttribute("center", [latitude, longitude]);
            marker.setAttribute("position", `${latitude},${longitude}`);

        });
}

function onError(error){
    if(error == 1){
        alert("Kullanıcı izni reddetti...");
    }
    else if(error == 2){
        alert("Konum alınamadı...");
    }
    else{
        alert("Bir hata oluştu...");
    }
}