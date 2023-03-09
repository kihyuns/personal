function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("위치는?",lat,lng)
}
function onGeoNO() {
    alert("No!")
}




navigator.geolocation.getCurrentPosition(onGeoOk,onGeoNO);