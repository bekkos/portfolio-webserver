let geo = navigator.geolocation;

const success = (data) => {
    console.log(data);
    window.open("https://www.google.com/maps/@" + data['coords']['latitude'] + "," + data['coords']['longitude'] + ",23z", '_blank')
}

geo.getCurrentPosition(success);
document.getElementById("output").innerText(position);

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